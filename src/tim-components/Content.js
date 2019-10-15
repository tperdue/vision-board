import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const userStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        paddingTop: "5rem",
        padding: theme.spacing(3),
    },
}));



const Content = (props) => {
    const classes = userStyles();
    return (
        <main className={classes.content}>

            {props.children}
        </main>

    )
}

export default Content;