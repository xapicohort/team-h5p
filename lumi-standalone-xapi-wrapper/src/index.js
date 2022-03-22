const app = {
	H5P: null,
	H5PIntegration: null,

	tincan: null,
	rootActivityId: null,

	init() {
		this.bindEvents();
	},

	bindEvents() {
		const frameEl = document.getElementById('h5p-frame');

		frameEl.onload = this.onFrameLoaded;
	},

	onFrameLoaded() {
		console.log('frameloaded');

		if (!this.contentWindow) {
			console.error('Cannot find iFrame window.');
			return;
		}

		const { H5P, H5PIntegration } = this.contentWindow;

		if (!H5P || !H5PIntegration) {
			console.error('Cannot find H5P in iFrame.');
			return;
		}

		app.H5P = H5P;
		app.H5PIntegration = H5PIntegration;

		app.setupXapi();
	},

	normalizeVars() {
		for (let item in app.H5PIntegration.contents) {
			const contentId = item.replace('cid-', '');

			// TODO: check if H5P activity ID is a valid URL already
			const contentActivityId = [app.rootActivityId, contentId].join('/');

			console.log('contentId:', contentId);
			console.log('contentActivityId:', contentActivityId);

			app.H5PIntegration.contents[item].url = contentActivityId;
		}
	},

	setupXapi() {
		this.tincan = new TinCan({ url: location.href });

		const { activity = {} } = this.tincan;

		this.rootActivityId = activity.id || 'http://h5p.org/xapi/activities';

		this.normalizeVars();

		this.sendCourseStmt('launched');

		this.H5P.externalDispatcher.on('xAPI', this.onXapiEvent);
	},

	sendStatement(statement) {
		const { actor } = this.tincan;
		statement.actor = actor;

		statement = JSON.parse(JSON.stringify(statement).replace(/\\n/ig, ''));

		this.tincan.sendStatement(statement, ({ err, xhr }) => {
			if (err) {
				console.error('statement error:', err, statement);
				return;
			}

			console.log('statement saved:', statement);
		});
	},

	sendLaunched() {
		const statement = {
			verb: {
				id: 'http://adlnet.gov/expapi/verbs/launched',
				display: {
					'en-US': 'launched',
				}
			},
			object: this.tincan.activity
		}

		app.sendStatement(statement);
	},

	courseVerbs: {
		launched: 'http://adlnet.gov/expapi/verbs/launched',
		completed: 'http://adlnet.gov/expapi/verbs/completed',
	},

	sendCourseStmt(verbDisplay, result) {
		const { activity } = this.tincan;
		activity.definition = activity.definition || {};

		activity.definition.type = 'http://adlnet.gov/expapi/activities/course';

		const verbId = app.courseVerbs[verbDisplay];

		const statement = {
			verb: {
				id: verbId,
				display: {
					'en-US': verbDisplay,
				}
			},

			object: activity
		}

		if (verbDisplay === 'completed') {
			// statement.result = { completion: true };
			statement.result = result;
		}

		app.sendStatement(statement);
	},

	onXapiEvent(event) {
		const { statement } = event.data || {};

		statement && app.sendStatement(statement);

		if (statement.verb.id.includes('completed')) {
			const { result } = statement;

			app.sendCourseStmt('completed', result);
		}

	},
};

document.addEventListener('DOMContentLoaded', function () {
	app.init();
});

