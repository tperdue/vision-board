let initialState = {
    canvases: [
        {
            id: '0',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#EEEEEE',
            radius: '',
            margin: '3px',
            url: ''
        },
        {
            id: '1',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#EEEEEE',
            radius: '',
            margin: '5px',
            url: ''

        },
        {
            id: '2',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#EEEEEE',
            radius: '',
            margin: '5px',
            url: ''
        },
        {
            id: '3',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#EEEEEE',
            radius: '',
            margin: '5px',
            url: ''
        },
        {
            id: '4',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#EEEEEE',
            radius: '',
            margin: '5px',
            url: ''
        },
        {
            id: '5',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#EEEEEE',
            radius: '',
            margin: '5px',
            url: ''
        },
        {
            id: '6',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#EEEEEE',
            radius: '',
            margin: '5px',
            url: ''
        },
        {
            id: '7',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#EEEEEE',
            radius: '',
            margin: '5px',
            url: ''
        },
        {
            id: '8',
            selected: false,
            height: '100%',
            width: '100%',
            color: '#EEEEEE',
            radius: '',
            margin: '5px',
            url: ''
        }

    ]
}


let SelectedCanvasReducer = (state = initialState, action) => {

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
    else if (action.type === 'ADD_IMAGE') {
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