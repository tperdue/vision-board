import React from 'react';
import { Component } from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import '../CSS/Template3.css';
import html2canvas from 'html2canvas';


class Template3 extends Component {
    constructor(props) {
        super(props);
        this.state = { download: false }
    }

    downloadHandler() {
        html2canvas(this.refs.downloadable, { useCORS: true }).then(function (canvas) {
            const data = canvas.toDataURL("image/png");
            const a = document.createElement('a');
            a.href = data;
            a.setAttribute('download', 'vision');
            a.click();
        });
    }


    render() {

        const canvasjsx = this.props.canvases.map((canvasObj) => {
            return (<Canvas
                selected={canvasObj.selected}
                height={canvasObj.height}
                width={canvasObj.width}
                border={canvasObj.border}
                color={canvasObj.color}
                radius={canvasObj.radius}
                margin={canvasObj.margin}
                url={canvasObj.url}
                key={canvasObj.id}
                clicked={() => { this.props.clicked(canvasObj.id) }} />)
        });


        return (
            <div>
                <div ref="downloadable" className="grid-item item2">
                    <div className="canvas-item item3T3">
                        {canvasjsx[0]}
                    </div>
                    <div className="canvas-item item4T3">
                        {canvasjsx[1]}
                    </div>
                    <div className="canvas-item item5T3">
                        {canvasjsx[2]}
                    </div>
                    <div className="canvas-item item6T3">
                        {canvasjsx[3]}
                    </div>
                    <div className="canvas-item item7T3">
                        {canvasjsx[4]}
                    </div>
                   
                   
                </div>
                <button onClick={this.downloadHandler.bind(this)}>Download</button>
            </div>)
    }


}

const matchStateToProps = (state) => {
    console.log(state)
    return { canvases: state.can.canvases }
}

const matchDispatchToProps = (dispatch) => {
    return {
        clicked: (canvasId) => dispatch({ type: 'SELECT_CANVAS', canvasId }),
    }
}


export default connect(matchStateToProps, matchDispatchToProps)(Template3);