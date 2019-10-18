import { TOGGLE_DRAWER } from '../action-types';
const initialState = {
    open: false
}

export default (state = initialState, action) => {

    
    const { open } = state;
    switch (action.type) {
        case TOGGLE_DRAWER:
            return { open: !open }

        default:
            return state
    }
}