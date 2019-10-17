import React from 'react';
import {Component} from 'react';
import Canvas from './Canvas';
import '../CSS/Template.css'




class Template extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    


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
                url= {canvasObj.url}
                key={canvasObj.id} 
                clicked={()=>{this.props.clicked(canvasObj.id)}}/>)
            });
            
        
        return (<div className="grid-item item2">  
                        <div className="grid-item item3">
                            {canvasjsx[0]} 
                        </div>
                        <div className="grid-item item4">
                            {canvasjsx[1]}
                        </div>
                        <div className="grid-item item5">
                            {canvasjsx[2]}
                        </div>
                        <div className="grid-item item6">
                            {canvasjsx[3]}
                        </div>
                        <div className="grid-item item7">
                            {canvasjsx[4]}
                        </div>
                        <div className="grid-item item8">
                            {canvasjsx[5]}
                        </div>
                        <div className="grid-item item9">
                            {canvasjsx[6]}
                        </div>
                        <div className="grid-item item10">
                            {canvasjsx[7]}
                        </div>
                        <div className="grid-item item11">
                            {canvasjsx[8]}
                        </div>
                        
                </div>)
    }


}

export default Template;


















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