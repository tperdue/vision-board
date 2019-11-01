import React from 'react';
import { Component } from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import SaveBoardDialog from '../tim-components/ui/alerts-dialogs/SaveBoardAlert';
import SaveBeforeSignInDialog from '../tim-components/ui/alerts-dialogs/SaveBeforeSignIn';
import '../CSS/Template2.css';
import html2canvas from 'html2canvas';
import { saveBoard } from '../redux-store/actions/board';
import { clicked } from '../redux-store/actions/canvas';
import { updateAlertDialog } from '../redux-store/actions/alert-dialogs'
import ContainedButtons from './Button';



class Template2 extends Component {
    constructor(props) {
        super(props);
        this.state = { download: false }
        this.downloadHandler = this.downloadHandler.bind(this)
        this.saveBoardHandler = this.saveBoardHandler.bind(this)
        this.handleSaveBoardClose = this.handleSaveBoardClose.bind(this);
        this.handleSaveBeforeSignInClose = this.handleSaveBeforeSignInClose.bind(this);
    }

    downloadHandler() {
        window.scrollTo(0,0);
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
        const uid = this.props.user.uid;
        const { updateAlertDialog } = this.props;
        if (uid) {
            this.props.saveBoard({ canvases, boardTitle, uid });
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
                    {canvasjsx}
                </div>
                <ContainedButtons downloadClick={this.downloadHandler} saveClick={this.saveBoardHandler} />
           
            </div>)
    }


}


const matchStateToProps = (state) => {

    const { alertDialogs, user, template } = state;

    return {
        canvases: state.can.canvases,
        selectedItem: state.searchResultReducer.selected,
        saveBoardDialog: alertDialogs.saveBoard,
        saveBeforeSignInDialog: alertDialogs.saveBeforeSignIn,
        bgColor: state.color.bgColor,
        template,
        user
    }
}

const matchDispatchToProps = {
    clicked,
    saveBoard,
    updateAlertDialog
}

export default connect(matchStateToProps, matchDispatchToProps)(Template2);