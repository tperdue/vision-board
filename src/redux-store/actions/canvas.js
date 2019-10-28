import { SELECT_CANVAS } from '../action-types';

export const clicked = (canvasId) => {

    return {
        type: SELECT_CANVAS,
        canvasId
    }

}