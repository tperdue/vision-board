import React from 'react';



const Canvas = (props)=>{

    
    let style = {
        height: props.height,
        width: props.width,
        border: `2px solid ${props.selected ? 'black': 'transparent'}`,
        backgroundColor: props.color,
        borderRadius: props.radius,
        margin: props.margin
    }
    return (
        <canvas style={style} onClick={props.clicked} ></canvas>
    )
}

export default Canvas;