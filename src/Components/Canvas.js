import React from 'react';



const Canvas = (props)=>{

    
    let style = {
        height: props.height,
        width: props.width,
        border: props.border,
        backgroundColor: props.color,
        borderRadius: props.radius,
        margin: props.margin
    }
    return (
        <canvas style={style} onClick={props.clicked} selected={props.selected}></canvas>
    )
}

export default Canvas;