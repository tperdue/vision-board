import React, { useState } from 'react';
import { connect } from 'react-redux'
import { logInUser, checkUserLogInStatus } from '../redux-store/actions/user';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';


const userStyles = makeStyles(theme => ({
    page: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: "5rem",
        padding: theme.spacing(3),
    },
    card: {
        minWidth: "50vw",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: "2.5rem",
        paddingLeft: "2.5rem"
    },

    cardActions: {
        display: 'flex',

    },

    loginButton: {
        flex: 1,
        paddingRight: "2.5rem",
        paddingLeft: "2.5rem",
        textAlign: "center"
    }




}));





const Login = (props) => {
    const classes = userStyles();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleLoginBtn = (event) => {
        const { logInUser } = props;
        const loginData = { username, password };
        setOpen(true);
        logInUser(loginData);
        console.log(loginData)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.page}>

            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <TextField
                        id="username"
                        label="Username"
                        onChange={handleUserNameChange}
                        margin="normal"
                        variant="outlined"
                        value={username}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        onChange={handlePasswordChange}
                        margin="normal"
                        variant="outlined"
                        value={password}
                    />
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.loginButton}
                        onClick={handleLoginBtn}
                    >
                        Sign In / Register
                        </Button>
                </CardActions>
            </Card>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Logging In</DialogTitle>
                <div>
                    <LinearProgress />

                </div>

            </Dialog>
        </div>

    )
}

const mapStateToProps = ({ user }) => {
    const { loggedIn, pendingLogin } = user;
    return { loggedIn, pendingLogin }
};

const mapDispatchToProps = {
    logInUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);