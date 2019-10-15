import {

    CHECK_LOGGED_IN_STATUS,
    LOG_IN_USER,
    LOG_OUT_USER,
    PENDING_USER_LOGIN,
    ERROR_LOGGING_IN,
    UPDATE_USER_STATUS,
    ERROR_REGISTERING_USER,
    SUCCESSFUL_GET_USER
} from '../action-types';


const initialState = {
    email: '',
    loggedIn: false,
    pendingLogin: false,
    errorLoggingIn: false,
    errorMessage: ''
}


export default (state = initialState, action) => {

    let user = {};
    switch (action.type) {
        case CHECK_LOGGED_IN_STATUS:
            return user;


        case LOG_IN_USER:
            user.username = action.payload.username;
            user.loggedIn = true;
            return user;

        case LOG_OUT_USER:
            user = action.payload
            return user;

        case PENDING_USER_LOGIN:
            user.pendingLogin = true;
            user.username = action.payload.username;
            return user;
        case ERROR_LOGGING_IN:
            user.errorLoggingIn = true;
            user.pendingLogin = false;
            user.username = action.payload.username;
            user.errorMessage = 'Invalid email and/or password. Please try again or create an account'
            return user;

        case ERROR_REGISTERING_USER:
            user.errorLoggingIn = true;
            user.pendingLogin = false;
            user.sername = action.payload.email;
            user.errorMessage = action.payload.errorMessage
            return user;

        case UPDATE_USER_STATUS:
            user = Object.assign(user, action.payload);
            return user

        case SUCCESSFUL_GET_USER:
            user = action.payload;
            return user


        default:
            return state;
    }
}

