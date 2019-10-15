import {

    LOG_IN_USER,
    LOG_OUT_USER,
    CHECK_LOGGED_IN_STATUS,
    UPDATE_USER_STATUS,
    PENDING_USER_LOGIN,
    ERROR_LOGGING_IN
} from '../action-types'
import axios from 'axios';
import firebase from '../firebase';

export const pendingUserStatus = (username) => {
    return {
        type: PENDING_USER_LOGIN,
        payload: {
            username

        }
    }
}

export const errorLoggingIn  = (username, errorMessage) => {
    return {
        type: ERROR_LOGGING_IN,
        payload: {
            errorMessage,
            username
          
        }
    }
}

export const updateUserStatus = ({ username, status }) => {
    return {
        type: UPDATE_USER_STATUS,
        payload: {
            username,
            status
        }
    }
}

export const logInUser = ({ email, password }) => async dispatch => {
    try {
        dispatch(pendingUserStatus(email));
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(response);
    }
    catch (error) {
        console.log(error);
        dispatch(errorLoggingIn(email, error.message))
    }
}


export const logOutUser = () => {
    return {
        type: LOG_OUT_USER
    }
}

/*
export const logInUser = ({ username, password }) => {
    return {
        type: LOG_IN_USER,
        payload: {
            username,
            password
        }
    }
}
*/
export const checkUserLogInStatus = (status) => {
    return {
        type: CHECK_LOGGED_IN_STATUS,
        payload: {
            status
        }
    }
}