import React from 'react';
import {Component} from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';




class Template extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    // canvasClick (event, i) {
    //     const canvasId = this.props.canvases.map((canvas)=>{
    //         const newCanvas = {...canvas};
    //         if (canvas.id == i) {
    //             newCanvas.selected = true;
    //             newCanvas.border = "gray";
    //         } else {
    //             newCanvas.selected = false;
    //             newCanvas.border = "none";

    //         };
    //         return newCanvas
    //     })
    //     this.setState({canvases: canvasId})
    // }
    


    render() {
        
        const canvasjsx = this.props.canvases.map((canvasObj) => {
            return (<Canvas 
                selected = {canvasObj.selected} 
                height = {canvasObj.height} 
                width = {canvasObj.width} 
                border = {canvasObj.border} 
                color = {canvasObj.color} 
                radius = {canvasObj.radius} 
                margin = {canvasObj.margin} 
                key={canvasObj.id} 
                clicked={()=>{this.props.clicked(canvasObj.id)}}/>)
            });
            
        
        return (<div style={{backgroundColor: "#086f54"}}>{canvasjsx}</div>)
    }


}

export default Template;