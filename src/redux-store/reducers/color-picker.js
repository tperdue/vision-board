import { BACKGROUND_COLOR } from '../action-types';

export const changeBgColor = (color) => ({
    type: BACKGROUND_COLOR,
    payload: color,
});

const initialState = {
    bgColor: 'black',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BACKGROUND_COLOR: 
            return {
                bgColor: action.payload,
            }
        default:
            return state;
        
    }
}