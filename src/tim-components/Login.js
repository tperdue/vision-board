import React, { useState } from 'react';
import { connect } from 'react-redux'
import { logInUser, registerUser } from '../redux-store/actions/user';
import { navigate } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinearProgress from '@material-ui/core/LinearProgress';
import TabPanel from './TabPanel';





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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [tabValue, setTabValue] = useState(0);


    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleNewEmailChange = (event) => {
        setNewEmail(event.target.value);
    }



    const handleLoginBtn = (event) => {
        const { logInUser } = props;
        const loginData = { email, password };
        setOpen(true);
        logInUser(loginData);

    }


    const handleRegisterBtn = (event) => {

        const { registerUser } = props;
        const userData = { email: newEmail, password: newPassword };
        setOpen(true);
        registerUser(userData);


    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    }

    const dialogContent = (props) => {
        const { errorMessage, errorLoggingIn, pendingLogin, loggedIn } = props;
        if (errorLoggingIn) return errorMessage;

        if (pendingLogin) return <LinearProgress />

        if (loggedIn) return 'Successfully logged in!'
    }


    if (props.loggedIn) {
        props.navigate('/');
    }
    return (

        <div className={classes.page}>

            <Tabs value={tabValue} onChange={handleTabChange} aria-label="simple tabs example">
                <Tab label="Log In" {...a11yProps(0)} />
                <Tab label="Sign Up" {...a11yProps(1)} />

            </Tabs>


            <TabPanel value={tabValue} index={0}>

                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <TextField
                            id="username"
                            label="Username"
                            onChange={handleEmailChange}
                            margin="normal"
                            variant="outlined"
                            value={email}
                        />

                        <TextField
                            id="password"
                            label="Password"
                            onChange={handlePasswordChange}
                            margin="normal"
                            type="password"
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
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </TabPanel>


            <TabPanel value={tabValue} index={1}>

                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <TextField
                            id="newEmail"
                            label="Email Address"
                            onChange={handleNewEmailChange}
                            margin="normal"
                            variant="outlined"
                            value={newEmail}
                        />

                        <TextField
                            id="newPassword"
                            label="Password"
                            onChange={handleNewPasswordChange}
                            margin="normal"
                            type="password"
                            variant="outlined"
                            value={newPassword}
                        />
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.loginButton}
                            onClick={handleRegisterBtn}
                        >
                            Create Account
                </Button>
                    </CardActions>
                </Card>
            </TabPanel>



            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

                <DialogTitle id="simple-dialog-title">Please Wait</DialogTitle>
                <div>
                    {dialogContent(props)}
                </div>
            </Dialog>
        </div>

    )
}

const mapStateToProps = ({ user }) => {

    const { loggedIn, pendingLogin, errorLoggingIn, errorMessage } = user;
    return { loggedIn, pendingLogin, errorLoggingIn, errorMessage }

};

const mapDispatchToProps = {
    logInUser,
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);