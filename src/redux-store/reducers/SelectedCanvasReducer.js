import { LOAD_CANVASES, CLEAR_BOARD } from '../action-types'
let initialState = {
    canvases: [
        {
            id: '0',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '',
            margin: '',
            url: '',
            template: '',
            templatePosition: {

            }
        },
        {
            id: '1',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '',
            margin: '',
            url: '',
            template: ''


        },
        {
            id: '2',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '',
            margin: '',
            url: '',
            template: ''

        },
        {
            id: '3',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '',
            margin: '',
            url: '',
            template: ''

        },
        {
            id: '4',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '',
            margin: '',
            url: '',
            template: ''

        },
        {
            id: '5',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '',
            margin: '',
            url: '',
            template: ''

        },
        {
            id: '6',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '',
            margin: '',
            url: '',
            template: ''

        },
        {
            id: '7',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '',
            margin: '',
            url: '',
            template: ''

        },
        {
            id: '8',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '',
            margin: '',
            url: '',
            template: ''

        },
        {
            id: '9',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#eae9e9',
            radius: '50%',
            margin: '0px',
            url: '',
            template: ''

        }

    ]
}


let SelectedCanvasReducer = (state = initialState, action) => {
    //console.log("Action name... got here...", action.type)

    if (action.type === 'SELECT_CANVAS') {
        const newCanvases = state.canvases.map((canvas) => {
            if (canvas.id === action.canvasId) {

                return {
                    ...canvas,
                    selected: !canvas.selected,
                }
            } else {
                return {
                    ...canvas,
                    selected: false,
                }
            }
        })

        return {
            canvases: newCanvases
        }
    }
    else if (action.type === LOAD_CANVASES) {
        return {
            ...state,
            canvases: action.payload.canvases
        }
    }

    else if (action.type === CLEAR_BOARD) {
        return {
            ...state,
            canvases: initialState.canvases
        }
    }
    else if (action.type === 'ADD_IMAGE') {
        //console.log("Payload from widget", action)
        const chosenCanvas = state.canvases.map((canvas) => {
            if (canvas.selected) {
                canvas.url = action.payload
            }

            return canvas;

        });
        return { canvases: chosenCanvas }
    } else {
        return state;
    }



}

export default SelectedCanvasReducer;