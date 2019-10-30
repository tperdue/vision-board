import { UPDATE_ALERT } from '../action-types';
const initialState = {
    saveBoard: {
        open: false,
        pending: false,
        title: '',
        message: ''
    },

    saveBeforeSignIn: {
        open: false,
        pending: false,
        title: '',
        message: ''
    },

    enterBoardTitle: {
        open: false,
        pending: false,
        title: '',
        message: ''
    }
};


export default (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_ALERT:

            const { alertKey, open, pending, message, title } = action.payload;
            const updatedStated = { ...state };
            updatedStated[alertKey] = { open, pending, message, title }
            return updatedStated;



        default:
            return state;
    }
}