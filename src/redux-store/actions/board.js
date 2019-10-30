import axios from 'axios';
import { updateAlertDialog } from './alert-dialogs';
import { UPDATE_USER_BOARDS, UPDATE_CURRENT_BOARD } from '../action-types';
import firebase from '../firebase';


export const saveBoard = (board) => async (dispatch) => {


    const url = 'https://us-central1-vision-board-51991.cloudfunctions.net/saveBoard';
    //const url = 'http://localhost:5000/vision-board-51991/us-central1/saveBoard';
    try {

        dispatch(updateAlertDialog({
            pending: true,
            open: true,
            title: 'Please Wait. Saving Vision Board.',
            message: '',
            alertKey: 'saveBoard'
        }))

        const response = await axios.post(url, board);
        if (response.data.hasError) {

        }

        else {
            dispatch(updateAlertDialog({
                pending: false,
                open: false,
                title: '',
                message: '',
                alertKey: 'saveBoard'
            }))

            dispatch(getUserBoards());
        }



    }
    catch (error) {
        console.log(error);

    }
}


export const updateUserBoards = (boards) => {

    return {
        type: UPDATE_USER_BOARDS,
        payload: {
            boards
        }
    }

}

export const getUserBoards = () => async (dispatch) => {
    //const url = 'http://localhost:5000/vision-board-51991/us-central1/getUserBoards';
    const url = 'https://us-central1-vision-board-51991.cloudfunctions.net/getUserBoards';
    const currentUser = firebase.auth().currentUser;


    if (currentUser) {
        const userToken = await firebase.auth().currentUser.getIdToken(true);
        const userBoardsResponse = await axios.post(url, { userToken });
        const { boards } = userBoardsResponse.data;

        dispatch(updateUserBoards(boards));
    }

    else {
        console.log('user not logged in')
    }
    try {



    }
    catch (error) {
        console.log(error);
    }
}


export const updateCurrentBoard = (currentBoard) => {

    return {
        type: UPDATE_CURRENT_BOARD,
        payload: {
            currentBoard
        }
    }
}