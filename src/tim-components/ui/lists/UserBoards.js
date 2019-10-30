import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { updateCurrentBoard, saveBoard, deleteBoard } from '../../../redux-store/actions/board';
import { loadCanvases } from '../../../redux-store/actions/canvas';

const useStyles = makeStyles({
    root: {
        margin: '0 auto',
        marginTop: '2rem',
        width: '60vw',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

const useIconStyles = makeStyles({
    root: {
        color: 'red',
        '&:hover': {
            backgroundColor: "red",
            color: 'white'
        }
    }
})


const UserBoardsList = (props) => {
    const classes = useStyles();
    const iconClasses = useIconStyles();
    const { board, saveBoard, updateCurrentBoard, deleteBoard, loadCanvases } = props;

    const handleLoadBoard = (id) => {
        const { userBoards } = board;
        const matchedBoard = userBoards.find(board => board.id === id);
        const canvases = matchedBoard.canvases;
        updateCurrentBoard(matchedBoard);
        loadCanvases(canvases)


    }
    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.userBoards.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell>{row.title}</TableCell>
                                <TableCell align="right">
                                    <Tooltip title="Load Board">
                                        <IconButton onClick={() => handleLoadBoard(row.id)}>
                                            <AutorenewIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="right">
                                    <Tooltip title="Change Title">
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="right">

                                    <Tooltip title="Delete Board">
                                        <IconButton classes={iconClasses}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}


const mapStateToProps = (state) => {
    const { board } = state;
    return { board }
}

const mapDispatchToProps = {
    updateCurrentBoard,
    saveBoard,
    deleteBoard,
    loadCanvases
}



export default connect(mapStateToProps, mapDispatchToProps)(UserBoardsList);