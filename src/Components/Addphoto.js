import React from 'react';
import { Widget } from "@uploadcare/react-widget";



const AddPhoto = (props)=>{
    return (<div>
        <p>
        <label htmlFor='file'>Your file:</label>{' '}
        <Widget publicKey='512c413de32b68f92c92' id='file' onChange={(info)=>{this.props.AddImage(info)}}/>
        </p>
    </div>)
}



export default AddPhoto;