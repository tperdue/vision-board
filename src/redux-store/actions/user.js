
import {

    LOG_IN_USER,
    LOG_OUT_USER,
    CHECK_LOGGED_IN_STATUS,
    UPDATE_USER_STATUS,
    PENDING_USER_LOGIN,
    ERROR_LOGGING_IN,
    REGISTERING_USER,
    REGISTER_USER,
    ERROR_REGISTERING_USER
} from '../action-types'


import firebase from '../firebase';
import store from '../store';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const  {uid, emailVerified, photoUrl, email, displayName } = user;
        const status = 'loggedIn';
        const userObj = {uid, emailVerified, photoUrl, email, displayName, status};
        store.dispatch(updateUserStatus(userObj));

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

export const errorLoggingIn  = (username, errorMessage) => {
    return {
        type: ERROR_LOGGING_IN,
        payload: {
            errorMessage,
            username
          
        }
    }
}

export const errorRegisteringUser  = (email, errorMessage) => {
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

export const checkUserLogInStatus = (status) => {
    return {
        type: CHECK_LOGGED_IN_STATUS,
        payload: {
            status
        }
    }
}


export const registerUser = ({email, password}) => async dispatch =>{

    dispatch(pendingUserStatus(email));
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(response);
    }

    catch(error) {
        console.log(error);
        dispatch(errorRegisteringUser(email, error.message))
    }

   
}

export const registeringUser = ({email}) => {
    return {
       type: REGISTERING_USER,
       payload: {
           email
           
       }
    }
}