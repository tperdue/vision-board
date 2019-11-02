import { SELECT_CANVAS, LOAD_CANVASES } from '../action-types';

export const clicked = (canvasId) => {

    return {
        type: SELECT_CANVAS,
        canvasId
    }

}

export const loadCanvases = (canvases) => {
    return {
        type: LOAD_CANVASES,
        payload: {
            canvases
        }
    }
}