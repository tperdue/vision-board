
import {


    LOG_OUT_USER,
    CHECK_LOGGED_IN_STATUS,
    UPDATE_USER_STATUS,
    PENDING_USER_LOGIN,
    ERROR_LOGGING_IN,
    REGISTERING_USER,
    ERROR_REGISTERING_USER,
    SUCCESSFUL_GET_USER
} from '../action-types'


import firebase from '../firebase';
import store from '../store';

firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        const { uid, emailVerified, photoUrl, email, displayName } = user;
        const loggedIn = true;
        const userObj = {
            uid,
            emailVerified,
            photoUrl,
            email,
            displayName,
            loggedIn,
            pendingLogin: false,
            errorLoggingIn: false
        };
        store.dispatch(getUser(userObj));

    }

    else {
        const userObj = {
            uid: '',
            emailVerified: false,
            photoUrl: '',
            email: '',
            displayName: '',
            loggedIn: false,
            pendingLogin: false,
            errorLoggingIn: false

        };

        store.dispatch(getUser(userObj));


    }
})

export const pendingUserStatus = (username) => {
    return {
        type: PENDING_USER_LOGIN,
        payload: {
            username

        }
    }
}

export const errorLoggingIn = (username, errorMessage) => {
    return {
        type: ERROR_LOGGING_IN,
        payload: {
            errorMessage,
            username

        }
    }
}

export const errorRegisteringUser = (email, errorMessage) => {
    return {
        type: ERROR_REGISTERING_USER,
        payload: {
            errorMessage,
            email

        }
    }
}

export const updateUserStatus = ({ uid, emailVerified, photoUrl, email, displayName, status }) => {
    return {
        type: UPDATE_USER_STATUS,
        payload: {
            uid,
            emailVerified,
            photoUrl,
            email,
            displayName,
            status

        }
    }
}

export const getUser = (userObj) => {
    return {
        type: SUCCESSFUL_GET_USER,
        payload: userObj
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


export const logOutUser = (email) => async dispatch => {
    console.log(email);
    try {
        dispatch(pendingUserStatus(email));
        await firebase.auth().signOut();

    }
    catch (error) {
        console.log(error);
        dispatch(errorLoggingIn(email, error.message))
    }
}

export const checkUserLogInStatus = (status) => {
    return {
        type: CHECK_LOGGED_IN_STATUS,
        payload: {
            status
        }
    }
}


export const registerUser = ({ email, password }) => async dispatch => {

    dispatch(pendingUserStatus(email));
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);



    }

    catch (error) {
        console.log(error);
        dispatch(errorRegisteringUser(email, error.message))
    }


}

export const registeringUser = ({ email }) => {
    return {
        type: REGISTERING_USER,
        payload: {
            email

        }
    }
}