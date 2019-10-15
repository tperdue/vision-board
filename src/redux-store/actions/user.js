import {

    LOG_IN_USER,
    LOG_OUT_USER,
    CHECK_LOGGED_IN_STATUS,
    UPDATE_USER_STATUS,
    PENDING_USER_LOGIN
} from '../action-types'
import axios from 'axios';

export const pendingUserStatus = (username) => {
    return {
        type: PENDING_USER_LOGIN,
        payload: {
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

export const logInUser = ({ username, password }) => async dispatch => {
    try {
        dispatch(pendingUserStatus(username));
        const response = await axios.post('http://localhost:3001/users/login', { username, password });
        console.log(response);
    }
    catch (error) {

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