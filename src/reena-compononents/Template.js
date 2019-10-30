import React from 'react';
import { Component } from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import SaveBoardDialog from '../tim-components/ui/alerts-dialogs/SaveBoardAlert';
import SaveBeforeSignInDialog from '../tim-components/ui/alerts-dialogs/SaveBeforeSignIn';
import EnterBoardTitleDialog from '../tim-components/ui/alerts-dialogs/EnterBoardTitle';
import '../CSS/TemplateStyles.css';
import html2canvas from 'html2canvas';
import { saveBoard, updateCurrentBoard } from '../redux-store/actions/board';
import { clicked } from '../redux-store/actions/canvas';
import { updateAlertDialog } from '../redux-store/actions/alert-dialogs'
import ContainedButtons from './Button';



class Template extends Component {
    constructor(props) {
        super(props);
        this.state = { download: false }
        this.downloadHandler = this.downloadHandler.bind(this)
        this.saveBoardHandler = this.saveBoardHandler.bind(this)
        this.handleSaveBoardClose = this.handleSaveBoardClose.bind(this);
        this.handleSaveBeforeSignInClose = this.handleSaveBeforeSignInClose.bind(this);
        this.updateOrSave = this.updateOrSave.bind(this);
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

    updateOrSave(currentBoard) {
        const { updateAlertDialog, updateCurrentBoard, user, canvases, saveBoard } = this.props;
        const board = {
            ...currentBoard,
            canvases,
            uid: user.uid,

        }
        if (!board.id) {
            updateAlertDialog({
                alertKey: 'enterBoardTitle',
                open: true,
                pending: false,
                message: '',
                title: 'Please Enter a Title for this Board'
            })

            updateCurrentBoard(board);
        }
        else {
            saveBoard(board);
        }
    }

    saveBoardHandler() {


        const uid = this.props.user.uid;
        const { updateAlertDialog } = this.props;
        const { currentBoard } = this.props.board;

        if (uid) {
            this.updateOrSave(currentBoard)
        }
        else {
            updateAlertDialog({
                alertKey: 'saveBeforeSignIn',
                open: true,
                pending: false,
                message: 'You must be signed in to save a board',
                title: 'You must be signed in to save a board'
            })

        }
    }

    handleSaveBoardClose() {

    }

    handleSaveBeforeSignInClose() {

        this.props.updateAlertDialog({
            alertKey: 'saveBeforeSignIn',
            open: false,
            pending: false,
            message: '',
            title: ''
        })
    }

    render() {

        console.log("Selected... ", this.props.selectedItem)
        const { saveBoardDialog, saveBeforeSignInDialog, enterBoardTitleDialog } = this.props;
        const { handleSaveBoardClose, handleSaveBeforeSignInClose } = this;

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
                            radius={canvasObj.radius}
                            url={canvasObj.url}
                            key={canvasObj.id}
                            clicked={() => { clicked(canvasObj.id) }} />
                    </div>
                )
            });


        return (
            <div>
                <div ref="downloadable" className="grid-item item2" style={{ backgroundColor: this.props.bgColor }}>
                    {canvasjsx}
                </div>

                <ContainedButtons downloadClick={this.downloadHandler} saveClick={this.saveBoardHandler} />
                <SaveBoardDialog info={saveBoardDialog} handleClose={handleSaveBoardClose} />
                <SaveBeforeSignInDialog info={saveBeforeSignInDialog} handleClose={handleSaveBeforeSignInClose} />
                <EnterBoardTitleDialog info={enterBoardTitleDialog} />
            </div>)
    }
}

const matchStateToProps = (state) => {

    //console.log(state)
    const { alertDialogs, user, template, board } = state;

    return {
        canvases: state.can.canvases,
        selectedItem: state.searchResultReducer.selected,
        saveBoardDialog: alertDialogs.saveBoard,
        saveBeforeSignInDialog: alertDialogs.saveBeforeSignIn,
        enterBoardTitleDialog: alertDialogs.enterBoardTitle,
        bgColor: state.color.bgColor,
        template,
        user,
        board
    }
}

const matchDispatchToProps = {
    clicked,
    saveBoard,
    updateAlertDialog,
    updateCurrentBoard
}

export default connect(matchStateToProps, matchDispatchToProps)(Template);