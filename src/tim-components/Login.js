import React, { useState } from 'react';
import { connect } from 'react-redux'
import { logInUser, registerUser } from '../../../redux-store/actions/user';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinearProgress from '@material-ui/core/LinearProgress';
import TabPanel from '../../TabPanel';
import LoginSignUpForm from './ui/forms/login-signup-form';
import userStyles from '../CSS/Login';

const Login = (props) => {
    const classes = userStyles();
    const [open, setOpen] = useState(false);
    const [tabValue, setTabValue] = useState(0);


    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleLogin = (email, password) => {
        const { logInUser } = props;
        const loginData = { email, password };
        setOpen(true);
        logInUser(loginData);

    }


    const handleRegister = (email, password) => {

        const { registerUser } = props;
        const userData = { email, password };
        setOpen(true);
        registerUser(userData);
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

                <LoginSignUpForm
                    emailId="email"
                    passwordId="password"
                    submitForm={handleLogin}
                />
            </TabPanel>


            <TabPanel value={tabValue} index={1}>
                <LoginSignUpForm
                    emailId="emailSignUp"
                    passwordId="passwordSignUp"
                    submitForm={handleRegister}
                />
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