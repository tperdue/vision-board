import axios from 'axios';
import { updateAlertDialog } from './alert-dialogs';
import {
    UPDATE_USER_BOARDS,
    UPDATE_CURRENT_BOARD,
    CLEAR_CURRENT_BOARD,
    CLEAR_BOARD
} from '../action-types';
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
            console.log('done');
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

export const deleteBoard = (board) => async (dispatch) => {


    const url = 'https://us-central1-vision-board-51991.cloudfunctions.net/deleteUserBoard';
    //const url = 'http://localhost:5000/vision-board-51991/us-central1/deleteUserBoard';
    const currentUser = firebase.auth().currentUser;



    try {

        dispatch(updateAlertDialog({
            pending: true,
            open: true,
            title: 'Deleting Board. Please Wait',
            message: '',
            alertKey: 'actionPending'
        }))

        if (currentUser) {
            const userToken = await firebase.auth().currentUser.getIdToken(true);


            const response = await axios.post(url, { board, userToken });

            if (response.data.hasError) {

            }

            else {
                dispatch(updateAlertDialog({
                    pending: false,
                    open: false,
                    title: '',
                    message: '',
                    alertKey: 'actionPending'
                }))

                dispatch(clearCurrentBoard(board.id));
                dispatch(clearBoard());
                dispatch(getUserBoards());



            }



        }

        else {
            dispatch(updateAlertDialog({
                pending: false,
                open: true,
                title: 'Unable to Delete. Please log in first.',
                message: 'You must be logged in to perform this action.',
                alertKey: 'saveBeforeSignIn'
            }))
        }





    }
    catch (error) {
        console.log(error);

    }
}


export const clearCurrentBoard = (boardId) => {

    return {
        type: CLEAR_CURRENT_BOARD,
        payload: {
            boardId
        }
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



    try {

        if (currentUser) {
            const userToken = await firebase.auth().currentUser.getIdToken(true);
            const userBoardsResponse = await axios.post(url, { userToken });
            const { boards } = userBoardsResponse.data;

            dispatch(updateUserBoards(boards));
        }

        else {
            console.log('user not logged in')
        }

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

export const clearBoard = () => {
    return {
        type: CLEAR_BOARD
    }
}