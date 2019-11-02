import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { saveBoard } from '../../../redux-store/actions/board';
import { updateAlertDialog } from '../../../redux-store/actions/alert-dialogs'


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));



const EnterBoardTitleDialog = ({ info, updateAlertDialog, saveBoard, userBoards }) => {

    const classes = useStyles();
    const { open, title, boardId } = info;
    const [boardTitle, setBoardTitle] = useState('')

    const handleDialogClose = () => {
        updateAlertDialog({
            alertKey: 'changeBoardTitle',
            open: false,
            pending: false,
            message: '',
            title: 'Please Enter a new Title for this Board'
        });


    };

    const handleSave = () => {

        const board = userBoards.find(board => board.id === boardId);
        const newBoard = {
            ...board,
            title: boardTitle
        }

        saveBoard(newBoard);
        updateAlertDialog({
            alertKey: 'changeBoardTitle',
            open: false,
            pending: false,
            message: '',
            title: 'Please Enter a Title for this Board'
        });
        setBoardTitle('')
    }
    const handleInputChange = (event) => {
        setBoardTitle(event.target.value);
    }




    return (
        <div>

            <Dialog
                open={open}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField
                            id="outlined-helperText"
                            label="Enter a Title"
                            defaultValue="Please enter title"
                            className={classes.textField}
                            value={boardTitle}
                            margin="normal"
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSave} color="primary" autoFocus>
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { board } = state;

    const { userBoards } = board;
    return {

        userBoards
    }

}

const mapDispatchToProps = {
    updateAlertDialog,
    saveBoard
}


export default connect(mapStateToProps, mapDispatchToProps)(EnterBoardTitleDialog);