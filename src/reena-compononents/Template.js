import React from 'react';
import { Component } from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveBoardDialog from '../tim-components/ui/alerts-dialogs/SaveBoardAlert';
import '../CSS/Template.css';
import html2canvas from 'html2canvas';
import { saveBoard } from '../redux-store/actions/board';
import { clicked } from '../redux-store/actions/canvas';



class Template extends Component {
    constructor(props) {
        super(props);
        this.state = { download: false }
        this.saveBoardHandler = this.saveBoardHandler.bind(this)
        this.handleSaveBoardClose = this.handleSaveBoardClose.bind(this);
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

    saveBoardHandler() {

        const canvases = this.props.canvases;
        const boardTitle = 'Demo';
        const user = 'demoUser';
        this.props.saveBoard({ canvases, boardTitle, user });


    }

    handleSaveBoardClose() {

    }


    render() {
        console.log("Selected... ", this.props.selectedItem)
        const { saveBoardDialog } = this.props;
        const { handleSaveBoardClose } = this;
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


        return (
            <div>

                <div ref="downloadable" className="grid-item item2">
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
                </div>

                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="full-width contained primary button group"
                >
                    <Button onClick={this.downloadHandler.bind(this)}>
                        Download to Image
                    </Button>


                    <Button onClick={this.saveBoardHandler}>Save Board</Button>

                </ButtonGroup>

                <SaveBoardDialog info={saveBoardDialog} handleClose={handleSaveBoardClose} />



            </div>)
    }


}

const matchStateToProps = (state) => {
    //console.log(state)
    const { alertDialogs } = state;

    return {
        canvases: state.can.canvases,
        selectedItem: state.searchResultReducer.selected,
        saveBoardDialog: alertDialogs.saveBoard
    }
}


const matchDispatchToProps = {
    clicked,
    saveBoard
}


export default connect(matchStateToProps, matchDispatchToProps)(Template);