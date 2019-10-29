import { BACKGROUND_COLOR } from '../action-types';
// const BACKGROUND_COLOR = 'ACTIONS/BACKGROUND_COLOR'

export const changeBgColor = (color) => ({
    type: BACKGROUND_COLOR,
    payload: color,
});

const initialState = {
    bgColor: '#3c4245',
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