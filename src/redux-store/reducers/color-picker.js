import { PICK_COLOR_1, PICK_COLOR_2 } from '../action-types';
const initialState = {
    color1: '#000000',
    color2: '#000000'
}

export default (state = initialState, action) => {


    switch (action.type) {
        case PICK_COLOR_1:
            return { color1: '#000000' }

        case PICK_COLOR_2:
            return { color2: '#000000' }
        default:
            return state
    }
}