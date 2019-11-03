import React from 'react';
import { Component } from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import '../CSS/TemplateStyles.css';
import html2canvas from 'html2canvas';
import { clicked } from '../redux-store/actions/canvas';
import ContainedButtons from './Button';
import TextInput from '../veronica-components/TextInput';


class Template extends Component {
    constructor(props) {
        super(props);
        this.state = { download: false }
        this.downloadHandler = this.downloadHandler.bind(this)


    }

    downloadHandler() {
        window.scrollTo(0,0);
        html2canvas(this.refs.downloadable, { useCORS: true, dpi: 200 }).then(function (canvas) {
            const data = canvas.toDataURL("image/png");
            const a = document.createElement('a');
            a.href = data;
            a.setAttribute('download', 'vision');
            a.click();
        });
    }


    render() {

        console.log("Selected... ", this.props.selectedItem)

        const { templateClass, templateCells } = this.props.template;
        const clicked = this.props.clicked;
        const canvasjsx = this.props.canvases
            .filter((canvas, index) => templateCells[index])
            .map((canvasObj, index) => {
                const classString = `${templateClass} ${templateCells[index]}`;
                return (
                    <div className={classString} key={canvasObj.id}>
                        <Canvas
                            selected={canvasObj.selected}
                            height={canvasObj.height}
                            width={canvasObj.width}
                            border={canvasObj.border}
                            color={canvasObj.color}
                            url={canvasObj.url}
                            key={canvasObj.id}
                            clicked={() => { clicked(canvasObj.id) }} />
                    </div>
                )
            });


        return (
            <div>
                <div ref="downloadable" className="grid-item item2" style={{ backgroundColor: this.props.bgColor }}>
                <TextInput /> <TextInput /> <TextInput /> <TextInput /> <TextInput /> <TextInput /> <TextInput />
               
                    {canvasjsx}
                </div>

                <ContainedButtons downloadClick={this.downloadHandler} />

            </div>)
    }
}

const matchStateToProps = (state) => {

    //console.log(state)
    const { template } = state;

    return {
        canvases: state.can.canvases,
        selectedItem: state.searchResultReducer.selected,
        bgColor: state.color.bgColor,
        template,

    }
}

const matchDispatchToProps = {
    clicked

}

export default connect(matchStateToProps, matchDispatchToProps)(Template);