import {
    CHECK_LOGGED_IN_STATUS,
    LOG_IN_USER,
    LOG_OUT_USER
} from '../action-types';


const initialState = {
    username: '',
    loggedIn: false,
}


export default (state = initialState, action) => {

    let user = state;
    switch (action.type) {
        case CHECK_LOGGED_IN_STATUS:
            return user;


        case LOG_IN_USER:
            user.username = action.payload.username;
            user.loggedIn = true;
            return user;

        case LOG_OUT_USER:
            user.username = '';
            user.loggedIn = false;
            return user;


        default:
            return user;
    }
}

