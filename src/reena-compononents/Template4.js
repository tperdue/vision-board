import React from 'react';
import { Component } from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import '../CSS/Template4.css';
import html2canvas from 'html2canvas';
import ContainedButtons from './Button';



class Template4 extends Component {
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
                // margin={canvasObj.margin}
                url={canvasObj.url}
                key={canvasObj.id}
                clicked={() => { this.props.clicked(canvasObj.id) }} />)
        });


        return (
            <div>
                <div ref="downloadable" className="grid-item item2" style={{backgroundColor: this.props.bgColor}}>
                    <div className="canvas-item item3T4">
                        {canvasjsx[0]}
                    </div>
                    <div className="canvas-item item4T4">
                        {canvasjsx[1]}
                    </div>
                    <div className="canvas-item item5T4">
                        {canvasjsx[2]}
                    </div>
                    <div className="canvas-item item6T4">
                        {canvasjsx[3]}
                    </div>
                    <div className="canvas-item item7T4">
                        {canvasjsx[4]}
                    </div>
                    <div className="canvas-item item8T4">
                        {canvasjsx[5]}
                    </div>
                    <div className="canvas-item item9T4">
                        {canvasjsx[6]}
                    </div>
                    <div className="canvas-item item10T4">
                        {canvasjsx[7]}
                    </div>
                    <div className="canvas-item item11T4">
                        {canvasjsx[8]}
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


export default connect(matchStateToProps, matchDispatchToProps)(Template4);