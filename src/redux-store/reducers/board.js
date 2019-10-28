import { SAVE_BOARD } from '../action-types';
import { saveBoard } from '../actions/board';

const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_BOARD:
            console.log(action)
            const test = saveBoard(action.payload.board)();
            console.log(test);
            return state;

        default:
            return state;
    }



}