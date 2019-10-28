import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        height: '2rem'
    }
})

const SaveBoardAlert = ({ info, handleClose }) => {
    const { open, pending, message, title } = info;
    const DisplayMessage = () => <div>{message}</div>
    const classes = useStyles();
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle>{title}</DialogTitle>
            {pending ? <LinearProgress classes={classes} /> : <DisplayMessage />}
        </Dialog>
    )
}

export default SaveBoardAlert;