# Overview

This is a work-in-progress: to capture xAPI statements from H5P interactives and forward to an LRS. The code will be implemented to work with [H5P Standalone Player](https://github.com/tunapanda/h5p-standalone) by [Tunapanda](https://github.com/tunapanda/).

Below are steps to setup [H5P Standalone Player](https://github.com/tunapanda/h5p-standalone) (by Tunapanda) on your local computer. This setup will display H5P interactives from a web server. It's not designed to be launched from an LMS. 

To see a working version of the standalone server, download and extract this [zip file ](https://drive.google.com/file/d/178PKI1dSr28o1JooUahtzCV8pLVPYfEY/view?usp=sharing), then skip to the **Run the standalone player** section below. 

## Download the player
1. Go to the H5P Standalone [releases page](https://github.com/tunapanda/h5p-standalone/releases/tag/v3.5.0).
2. Download [h5p-standalone-3.5.0.zip](https://github.com/tunapanda/h5p-standalone/releases/download/v3.5.0/h5p-standalone-3.5.0.zip) from the **Assets** section (at the bottom of the page).
3. Extract the contents of the zip file. The file should unzip to a folder named `h5p-standalone-3.5.0`.

## Download sample HTML files 
1. Go to [h5p-standalone/test](https://github.com/tunapanda/h5p-standalone/tree/master/test), and download these two sample HTML files to your `h5p-standalone-3.5.0` folder. (**Be sure to download the Raw files.**)
   * `single.html`
   * `multiple.html`

## Add H5P content
1. Within  the `h5p-standalone-3.5.0` folder, create a folder named `content.`
2. Extract a couple of H5P files to the `content` folder. 
   * Change `.h5p` to `.zip`.
   * Unzip the `.zip` file to a folder.
   * Copy the folder to `content`.

## Modify the HTML files to point to the H5P content
1. Open `single.html` and  set `h5pJsonPath` to the path of the H5P content: `/content/h5p-folder-name`. For example `/content/sort-paragraphs`.
3. Open `multiple.html` and do the same.

## Run the standalone player
Run the player on a web server. For example, to use Python as a web server:
1. Open Terminal and navigate to the`h5p-standalone-3.5.0` folder.
2. Start the web server: `python3 -m http.server`
3. Open the HTML pages in your browser:
   * To display the page with one interactive: [http://127.0.0.1:8000/single.html] (http://127.0.0.1:8000/single.html)
   * To display the page with two interactives: [http://127.0.0.1:8000/multiple.html] (http://127.0.0.1:8000/multiple.html)
