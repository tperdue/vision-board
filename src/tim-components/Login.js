import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const userStyles = makeStyles(theme => ({
    content: {
        alignSelf: 'center',
        flexGrow: 1,
        paddingTop: "5rem",
        padding: theme.spacing(3),
    },
}));



const Login = (props) => {
    const classes = userStyles();
    return (
        <main className={classes.content}>

            {props.children}
        </main>

    )
}

export default Login;