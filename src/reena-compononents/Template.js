import React from 'react';
import { Component } from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import '../CSS/Template.css'


class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        console.log("Selected... ", this.props.selectedItem)

        const canvasjsx = this.props.canvases.map((canvasObj) => {
            return (<Canvas
                selected={canvasObj.selected}
                height={canvasObj.height}
                width={canvasObj.width}
                border={canvasObj.border}
                color={canvasObj.color}
                radius={canvasObj.radius}
                margin={canvasObj.margin}
                url={canvasObj.selected && this.props.selectedItem ? this.props.selectedItem.webformatURL : canvasObj.url}
                key={canvasObj.id}
                clicked={() => { this.props.clicked(canvasObj.id) }} />)
        });


        console.log("Canvas jsx ", canvasjsx)


        return (<div className="grid-item item2">
            <div className="canvas-item item3">
                {canvasjsx[0]}
            </div>
            <div className="canvas-item item4">
                {canvasjsx[1]}
            </div>
            <div className="canvas-item item5">
                {canvasjsx[2]}
            </div>
            <div className="canvas-item item6">
                {canvasjsx[3]}
            </div>
            <div className="canvas-item item7">
                {canvasjsx[4]}
            </div>
            <div className="canvas-item item8">
                {canvasjsx[5]}
            </div>
            <div className="canvas-item item9">
                {canvasjsx[6]}
            </div>
            <div className="canvas-item item10">
                {canvasjsx[7]}
            </div>
            <div className="canvas-item item11">
                {canvasjsx[8]}
            </div>

        </div>)
    }


}

const matchStateToProps = (state) => {
    console.log(state)
    return { canvases: state.can.canvases, selectedItem: state.searchResultReducer.selected, }
}

const matchDispatchToProps = (dispatch) => {
    return {
        clicked: (canvasId) => dispatch({ type: 'SELECT_CANVAS', canvasId }),
    }
}


export default connect(matchStateToProps, matchDispatchToProps)(Template);