const el = document.getElementById('h5p-container');

const options = {
  h5pJsonPath: './h5p-folder',
  frameJs: './assets/frame.bundle.js',
  frameCss: './assets/styles/h5p.css',
};

const tincan = new TinCan({ url: location.href });

const actorFound = !!tincan.actor;

new H5PStandalone.H5P(el, options).then(() => {
  H5P.externalDispatcher.on("xAPI", (event) => {
    const { statement } = event.data || {};

    if (!actorFound) {
      return;
    }

    const { actor } = tincan;
    statement.actor = actor;

    tincan.sendStatement(statement, ({ err, xhr }) => {
      if (err) {
        console.error('statement error:', err, statement);
        return;
      }

      console.log('statement saved:', statement);
    });
  });
});