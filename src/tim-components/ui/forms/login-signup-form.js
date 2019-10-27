import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const userStyles = makeStyles(theme => ({

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

const LoginSignUpForm = ({ submitForm, emailId, passwordId }) => {

    const classes = userStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);


    }

    const handleLoginBtn = () => {
        submitForm(email, password);
    }


    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <TextField
                    id={emailId}
                    label="Username"
                    onChange={handleEmailChange}
                    margin="normal"
                    variant="outlined"
                    value={email}
                />

                <TextField
                    id={passwordId}
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
    )
}

export default LoginSignUpForm;