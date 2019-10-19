import { OPEN_DIALOG, CLOSE_DIALOG } from '../action-types';
const initialState = {
    open: false
}

export default (state = initialState, action) => {



    switch (action.type) {
        case OPEN_DIALOG:
            return { open: true }

        case CLOSE_DIALOG:
            return { open: false }
        default:
            return state
    }
}