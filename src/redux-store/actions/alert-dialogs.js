import { UPDATE_ALERT } from '../action-types';

export const updateAlertDialog = (dialogInfo) => {


    return {
        type: UPDATE_ALERT,
        payload: dialogInfo
    }
}

