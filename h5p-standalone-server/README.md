Below are steps to setup [H5P Standalone Player](https://github.com/tunapanda/h5p-standalone) (by Tunapanda) on your local computer. This setup will display H5P interactives from a web server. It's not designed to be launched from an LMS. 

**Important**: This setup does not yet capture and forward xAPI statements from H5P interactives.

To see a working version of the standalone server, download and extract this [zip file ](https://drive.google.com/file/d/178PKI1dSr28o1JooUahtzCV8pLVPYfEY/view?usp=sharing), then skip to the **Run the standalone player** section below. 


## Download the player
1. Go to the H5P Standalone [releases page](https://github.com/tunapanda/h5p-standalone/releases/tag/v3.5.0).
2. Download [h5p-standalone-3.5.0.zip](https://github.com/tunapanda/h5p-standalone/releases/download/v3.5.0/h5p-standalone-3.5.0.zip) from the **Assets** section (at the bottom of the page).
3. Extract the contents of the zip file. The file should unzip to a folder named `h5p-standalone-3.5.0`.

## Download sample HTML files 
4. Go to [h5p-standalone/test](https://github.com/tunapanda/h5p-standalone/tree/master/test) and download these two sample HTML files to your `h5p-standalone-3.5.0` folder:  `single.html` and `multiple.html`. **Be sure to download the Raw files from GitHub.**

## Add H5P content
5. Within  the `h5p-standalone-3.5.0` folder, create a folder named `content.`
6. Extract a couple of H5P files to the `content` folder. 
a. Change `.h5p` to `.zip`.
b. Copy the folder to `content`.

## Modify the HTML files to point to the H5P content
7. Open `single.html` and  set `h5pJsonPath` to the path of the H5P content: `/content/h5p-folder-name` ... for example `/content/sort-paragraphs`.
8. Open `multiple.html` and do the same.

## Run the standalone player
I ran the player on a basic Python web server.
1. Open Terminal and navigate to the`h5p-standalone-3.5.0` folder.
2. Start the web server: `python3 -m http.server`
3. Open the HTML pages in your browser:
a. To display the page with one interactive: [http://127.0.0.1:8000/single.html] (http://127.0.0.1:8000/single.html)
b. To display the page with two interactives: [http://127.0.0.1:8000/multiple.html] (http://127.0.0.1:8000/multiple.html)
