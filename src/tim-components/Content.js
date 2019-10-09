import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const userStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));



const Content = (props) => {
    return (
        <main className={classes.content}>

            {props.children}
        </main>

    )
}