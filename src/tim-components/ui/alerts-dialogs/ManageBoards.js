import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import UserBoardsList from '../lists/UserBoards';
import { connect } from 'react-redux'
import { getUserBoards } from '../../../redux-store/actions/board'

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },

    outlinedPrimary: {
        color: 'white',
        borderColor: 'white'

    },
    colorPrimary: {
        backgroundColor: '#3c4245'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ManageBoardsDialog = ({ user, board, getUserBoards }) => {


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false)
    };

    const preloadUserBoards = () => {

        getUserBoards();

    }

    useEffect(preloadUserBoards, [user]);


    return (
        <>

            <Button variant="outlined" color="primary" className={classes.outlinedPrimary} onClick={handleClickOpen}>
                Manage Boards
                    </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={[classes.appBar, classes.colorPrimary].join(' ')}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            My Boards
            </Typography>
                        <Button color="inherit" onClick={handleClose}>
                            Close
            </Button>
                    </Toolbar>
                </AppBar>
                <UserBoardsList userBoards={board.userBoards} />
            </Dialog>

        </>
    )
}


const mapStateToProps = (state) => {
    const { user, board } = state;
    return {
        user,
        board
    }

}


const mapDispatchToProps = {
    getUserBoards
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBoardsDialog);