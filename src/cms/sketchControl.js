import React from 'react';
import ZipLoader from 'zip-loader';
//import persistMedia from 'netlify-cms-core/src/actions/mediaLibrary';

const fileCheck = 'meta.json';

const SketchControl = () => {

    const handleFileChosen = (file) => {
        if (file === undefined) { // If user opens file selection dialog, but hits 'Cancel'
            document.getElementById('button').disabled = true;
        } else {
            ZipLoader.unzip( file ).then( function ( ZipLoaderInstance ) { // Unzip and return object containing contents
                try { // Check it object contains a meta.json file (i.e selected file is likely valid)
                    const json = ZipLoaderInstance.extractAsJSON(fileCheck);
                    console.log("Sketch file meta.json: ", json);
                    document.getElementById('button').disabled = false; // Enable button (upload) button as file is likely valid
                } catch (e) { // File unzips, but does not contain a meta.son file (i.e. file invalid), or is garbage
                    alert(`Oops! This isn't a valid Sketch file... Please select a valid Sketch file to upload.`);
                    document.getElementById('button').disabled = true;
                }
              });
        }
    };

    return <div>
        <input 
            type='file'
            id='file'
            accept='.sketch'
            onChange={e => handleFileChosen(e.target.files[0])}
        />
        <input 
            type='button'
            id='button'
            value='Upload'
            disabled='disabled'
            //onClick= Call some function to render file name/thumbnail image in CMS and upload file to GitHub.
        />
    </div>;
};

export default SketchControl;