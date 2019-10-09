import React from 'react';
import {Component} from 'react';
import Canvas from './Canvas';




class Template extends Component {
    constructor (props) {
        super(props);
        this.state = {
            canvases: [
                {
                    id: '0',
                    selected: false,
                    height: '400px',
                    width: '400px',
                    border: 'none',
                    color: 'gray',
                    radius: '5px',
                    margin: '',
                },
                {
                    id:'1',
                    selected: false,
                    height: '200px',
                    width: '200px',
                    border: 'none',
                    color: 'pink',
                    radius: '5px',
                    margin: '-8',
                }
            ]
        }
    }

    canvasClick (event, i) {
        const canvasId = this.state.canvases.map((canvas)=>{
            const newCanvas = {...canvas};
            if (canvas.id == i) {
                newCanvas.selected = true
            } else {
                newCanvas.selected = false
            };
            return newCanvas
        })
        this.setState({canvases: canvasId})
    }
    


    render() {
        
        const canvasjsx = this.state.canvases.map((canvasObj) => {
            return (<Canvas {...canvasObj} key={canvasObj.id} clicked={this.canvasClick.bind(this)}/>)
            });
            
        
        return (<div style={{backgroundColor: "#086f54"}}>{canvasjsx}</div>)
    }


}

export default Template;