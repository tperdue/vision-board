import {

    LOG_IN_USER,
    LOG_OUT_USER,
    CHECK_LOGGED_IN_STATUS
} from '../action-types'


export const logOutUser = () => {
    return {
        type: LOG_OUT_USER
    }
}

export const logInUser = ({ username, password }) => {
    return {
        type: LOG_IN_USER,
        payload: {
            username,
            password
        }
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