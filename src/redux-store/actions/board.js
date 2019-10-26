import axios from 'axios';
import { updateAlertDialog } from './alert-dialogs';

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
        }



    }
    catch (error) {
        console.log(error);

    }
}