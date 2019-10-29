import React from 'react';
import { Component } from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import '../CSS/Template3.css';
import html2canvas from 'html2canvas';
import ContainedButtons from './Button';



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
                url={canvasObj.url}
                key={canvasObj.id}
                clicked={() => { this.props.clicked(canvasObj.id) }} />)
        });


        return (
            <div>
                <div ref="downloadable" className="grid-item item2" style={{backgroundColor: this.props.bgColor}}>
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
                <ContainedButtons  downloadClick={this.downloadHandler.bind(this)}/>
            </div>)
    }


}

const matchStateToProps = (state) => {
    console.log(state)
    return { 
        canvases: state.can.canvases,
        bgColor: state.color.bgColor, 
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        clicked: (canvasId) => dispatch({ type: 'SELECT_CANVAS', canvasId }),
    }
}


export default connect(matchStateToProps, matchDispatchToProps)(Template3);