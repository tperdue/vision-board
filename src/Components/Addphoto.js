import React from 'react';
import uploadcare from 'uploadcare-widget';
import { Widget } from "@uploadcare/react-widget";




const AddPhoto = ()=>{
    return (<div>
        <input type="file" id="fileUpload">
            <label for="fileUpload">Choose Image
                </label>
                </input>

        <input type="hidden" role="uploadcare-uploader" name="my_file" />

        <p>
        <label htmlFor='file'>Your file:</label>{' '}
        <Widget publicKey='512c413de32b68f92c92' id='file' />
        </p>
    </div>)
}


export default AddPhoto;