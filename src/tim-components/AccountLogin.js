import React from 'react';
import { connect } from 'react-redux';
import { navigate } from "@reach/router"
import Button from '@material-ui/core/Button';
import { logOutUser } from '../redux-store/actions/user';

const AccountLogin = (props) => {

    const handleClick = () => {
        const { loggedIn } = props;
        if (loggedIn) {
            //Send log out functionality
        }

        else {
            navigate('/login');
        }


    }

    const buttonText = () => {
        const { loggedIn } = props;

        return loggedIn ? 'Log Out' : 'Log In'
    }


    return (
        <Button color="inherit" onClick={handleClick}>{buttonText()}</Button>
    )
}


const mapStateToProps = (state, ownProps) => {

    const { user } = state;
    const { email, loggedIn } = user;

    return { email, loggedIn }
};
const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);