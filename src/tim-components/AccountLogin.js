import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { logInUser, logOutUser, checkUserLogInStatus } from '../redux-store/actions/user';

const AccountLogin = (props) => {

    return (
        <Button color="inherit">Login</Button>
    )
}


const mapStateToProps = (state, ownProps) => {

    const { username, loggedIn } = state;

    return { username, loggedIn }
};
const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);