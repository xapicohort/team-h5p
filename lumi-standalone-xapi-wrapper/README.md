# Lumi Standalone xAPI Wrapper

## General Information

This wrapper is to support xAPI output for H5P interactions exported from the **Lumi** cross-platform H5P desktop app:

- https://lumi.education/
- https://github.com/lumieducation/lumi

The Lumi desktop app allows **offline** H5P authoring via the app (vs. web hosting on H5P website, WordPress, etc.). As of March 2022, it's still in development.

The **Lumi Standalone xAPI Wrapper** takes the interactions exported from Lumi, and along with a few support files can allow the resulting ZIP archive to be uploaded to an LMS like any other xAPI package.

---

## Instructions
- Download and extract the [latest release of the xAPI Wrapper](https://github.com/xapicohort/team-h5p/releases)
  - `lumi-standalone-xapi-wrapper`
  - This is your "course shell" that you will add files to and modify

### Course Shell Folder Structure
```
/(possible folder for media files)

index.html
index.js

tincan-min.js
tincan-min.map

tincan.xml
```

### Lumi
- Download the [latest release of the Lumi desktop app](https://github.com/Lumieducation/Lumi/releases/)
- Create your desired H5P interactions
  - Follow the [standard H5P instructions](https://h5p.org/documentation)
- Export from Lumi
  - *File > Export*
  - You can export as either:
    - All-in-one HTML file
    - One HTML file and several media files
      - If you have images/video
    - *(SCORM package not supported currently, but there's possibly a workaround)*
  
    - ![Lumi Export](docs/lumi-export-options.png)
  - Export the HTML as `h5p.html`

### xAPI Wrapper

- Drop your exported **Lumi H5P** files into the root of your course shell folder
  - Ensure your exported HTML file is named `h5p.html`
- Update the `tincan.xml` file with your **xAPI Activity** information:
  - ID
  - Name
  - Description
- Zip your files to create your xAPI package
- Upload to LMS

---

## Details
### Benefits
- Doesn't require external hosting for authoring
- Allows xAPI packaging without too much configuration
- Automatically pulls info from the LMS to allow LRS communication
  - LRS and user info
  - Uses the [TinCanJS](http://rusticisoftware.github.io/TinCanJS/) library to assist with processing
- Adds a `launched` and `completed` statement for the "course" that's wrapping the interaction
  - This includes the final score if there is one

### Disadvantages
- This solution currently only works for one H5P interaction, since that's all Lumi currently outputs at once
- There are several quirks to the H5P implementation (and/or Lumi) that required some hacks/workarounds
- This has a dependency on third-party H5P solution
  - If their project is abandoned, it won't receive updates
  - However, any packages resulting from this solution should work for the foreseeable future
