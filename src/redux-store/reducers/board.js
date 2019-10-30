import { SAVE_BOARD, UPDATE_USER_BOARDS, UPDATE_CURRENT_BOARD } from '../action-types';
import { saveBoard } from '../actions/board';

const initialState = {
    currentBoard: {
        title: '',
        id: '',
        canvases: '',
        uid: ''
    },
    userBoards: []

};
export default (state = initialState, action) => {

    switch (action.type) {
        case SAVE_BOARD:
            console.log(action)
            const board = action.payload.board;
            const test = saveBoard(board)();
            console.log(test);
            return state;

        case UPDATE_USER_BOARDS:
            return {
                ...state,
                userBoards: action.payload.boards
            }

        case UPDATE_CURRENT_BOARD:
            return {
                ...state,
                currentBoard: action.payload.currentBoard
            }


        default:
            return state;
    }



}