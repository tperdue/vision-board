import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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




const UserBoardsList = (props) => {
    const classes = useStyles();
    console.log(props)

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.userBoards.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell>{row.title}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}


export default UserBoardsList