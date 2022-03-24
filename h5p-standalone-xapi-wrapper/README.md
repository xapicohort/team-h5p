# h5p Standalone xAPI Wrapper

## General Information

This wrapper is to support xAPI output for H5P interactions exported from any valid [H5P](https://h5p.org) authoring tool in `.h5p` format.

It uses the [h5p-standalone](https://github.com/tunapanda/h5p-standalone) player from [Tunapanda](https://tunapanda.org/).

**NOTE**: The player supports a few other features, like [multiple interactions on a page](https://github.com/tunapanda/h5p-standalone#multiple-h5p-players-on-the-same-page) and [saving user resume state](https://github.com/tunapanda/h5p-standalone#previous-state-restoration) - the wrapper isn't currently configured for that, but it's a good idea for the future.

---

## Instructions
- Download and extract the [latest release of the h5p-standalone library](https://github.com/tunapanda/h5p-standalone/releases)
  - These files will be included in your course
- Download and extract the [latest release of the xAPI Wrapper](https://github.com/xapicohort/team-h5p/releases)
  - `h5p-standalone-xapi-wrapper`
  - This is your "course shell" that you will add files to and modify

### Course Shell Folder Structure
```
/assets
  - (h5p-standalone library files)
  
/h5p-folder
  - (your H5P extracted interaction files)

index.html
index.js

tincan-min.js
tincan-min.map

tincan.xml
```
### H5P
- Create and export your interaction in `.h5p` format from any H5P authoring tool
- Rename the H5P file extension from `.h5p` file to `.zip`
- Extract the contents into the `/h5p-folder` directory of the course shell

### `h5p-standalone` library
- Extract the contents into the `/assets` directory of the course shell

### xAPI Wrapper
- Update the `tincan.xml` file with your **xAPI Activity** information:
  - ID
  - Name
  - Description
- Zip your files to create your xAPI package
- Upload to LMS

---

## Details
### Benefits
- Can use any H5P authoring environment that exports to `.h5p` format
- Allows xAPI packaging without too much configuration
- Automatically pulls info from the LMS to allow LRS communication
  - LRS and user info
  - Uses the [TinCanJS](http://rusticisoftware.github.io/TinCanJS/) library to assist with processing

### Disadvantages
- Currently not configured for multiple H5P interactions
  - But the `h5p-standalone` library does have [instructions](https://github.com/tunapanda/h5p-standalone#multiple-h5p-players-on-the-same-page) for it, so possibly a future addition
- Dependent on a third-party library
  - If their project is abandoned, it won't receive updates
  - However, any packages resulting from this solution should work for the foreseeable future