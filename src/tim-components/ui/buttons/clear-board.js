import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { clearCurrentBoard, clearBoard } from '../../../redux-store/actions/board';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const ClearBoardButton = ({ clearCurrentBoard, currentBoard, clearBoard }) => {
    const classes = useStyles();

    const handleClick = () => {
        clearCurrentBoard(currentBoard.id)
        clearBoard()
    }

    return (
        <Button
            onClick={handleClick}
            className={classes.button}
            variant="contained"
            color="secondary"

        >Clear Board</Button>
    )
}

const mapStateToProps = (state) => {
    const { board } = state;
    const { currentBoard } = board;
    return {
        currentBoard
    }
}

const mapDispatchToProps = {
    clearCurrentBoard,
    clearBoard
}


export default connect(mapStateToProps, mapDispatchToProps)(ClearBoardButton);