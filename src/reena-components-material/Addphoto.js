import React from 'react';
import { Widget } from "@uploadcare/react-widget";
import { connect }from 'react-redux';




const AddPhoto = (props)=>{
    return (<div>
        <p>
        <label htmlFor='file'>Your file:</label>{' '}
        <Widget 
            publicKey='512c413de32b68f92c92' 
            id='file' 
            onChange={(info)=>{console.log(info); props.addImage(info.cdnUrl)}}
            tabs="file"    
            />
        </p>
    </div>)
}

const matchDispatchToProps = (dispatch) => {
    return {
        addImage: (image)=>dispatch({type:'ADD_IMAGE', payload: image }),
    }
}

export default connect(null, matchDispatchToProps)(AddPhoto)