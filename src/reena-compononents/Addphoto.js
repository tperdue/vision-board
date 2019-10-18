import React from 'react';
import { Widget } from "@uploadcare/react-widget";
import { connect } from 'react-redux';
import uploadcareTabEffects from 'uploadcare-widget-tab-effects'




const AddPhoto = (props) => {
    const editTab = (container, button, ...theArgs) => {
        button[0].textContent = 'Edit Photo';
        return uploadcareTabEffects(container, button, ...theArgs);
    }



    return (<div >
        <p>
            <label htmlFor='file'>Your file:</label>{' '}
            <Widget
                publicKey='512c413de32b68f92c92'
                id='file'
                onChange={(info) => { console.log(info); props.addImage(info.cdnUrl) }}
                customTabs={{ "Effects": uploadcareTabEffects }}
                tabs="file Effects"
                effects='crop, rotate, mirror, flip, blur, sharp, enhance, grayscale, invert'
                value={props.selectedCanvas.url}


            />
        </p>
    </div>)
}

const matchStateToProps = (state) => {
    const canvases = state.can.canvases;
    const selectedCanvas = canvases.find(canvas => canvas.selected) || {};
    return { selectedCanvas };
}

const matchDispatchToProps = (dispatch) => {
    return {
        addImage: (image) => dispatch({ type: 'ADD_IMAGE', payload: image }),
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(AddPhoto)