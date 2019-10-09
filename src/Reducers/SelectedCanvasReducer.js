let initialState = {}


let SelectedCanvasReducer = (state = initialState, action) => {
    if(action.type === 'ADD_CANVAS') {
        return {
            ...state,
            selected: true,
            border: "gray"
}
    }else {
        return state;
    }
}

export default SelectedCanvasReducer;