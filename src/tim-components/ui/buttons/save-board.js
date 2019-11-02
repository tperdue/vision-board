import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { saveBoard, updateCurrentBoard } from '../../../redux-store/actions/board';
import { updateAlertDialog } from '../../../redux-store/actions/alert-dialogs';
import SaveBoardDialog from '../alerts-dialogs/SaveBoardAlert';
import SaveBeforeSignInDialog from '../alerts-dialogs/SaveBeforeSignIn';
import EnterBoardTitleDialog from '../alerts-dialogs/EnterBoardTitle';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));


const SaveBoardButton = (props) => {

    const classes = useStyles();
    const { saveBoardDialog, saveBeforeSignInDialog, enterBoardTitleDialog, user, board } = props;
    const { updateAlertDialog, updateCurrentBoard, saveBoard, canvases } = props

    const updateOrSave = (currentBoard) => {


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

    const saveBoardHandler = () => {


        const uid = user.uid;
        const { updateAlertDialog } = props;
        const { currentBoard } = board;

        if (uid) {
            updateOrSave(currentBoard)
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

    const handleSaveBeforeSignInClose = () => {

        updateAlertDialog({
            alertKey: 'saveBeforeSignIn',
            open: false,
            pending: false,
            message: '',
            title: ''
        })
    }

    return (
        <>
            <Button
                onClick={saveBoardHandler}
                className={classes.button}
                variant="contained"
                color="secondary"

            >Save Board</Button>
            <SaveBoardDialog info={saveBoardDialog} />
            <SaveBeforeSignInDialog info={saveBeforeSignInDialog} handleClose={handleSaveBeforeSignInClose} />
            <EnterBoardTitleDialog info={enterBoardTitleDialog} />
        </>
    )
}


const mapStateToProps = (state) => {
    const { user, board, alertDialogs, } = state;
    const { can } = state;
    const { canvases } = can;

    return {
        canvases,
        user,
        board,
        saveBoardDialog: alertDialogs.saveBoard,
        saveBeforeSignInDialog: alertDialogs.saveBeforeSignIn,
        enterBoardTitleDialog: alertDialogs.enterBoardTitle,
    }

}

const mapDispatchToProps = {
    saveBoard,
    updateCurrentBoard,
    updateAlertDialog
}


export default connect(mapStateToProps, mapDispatchToProps)(SaveBoardButton);