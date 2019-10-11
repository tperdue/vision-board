let initialState = {
    canvases: [
        {
            id: '0',
            selected: false,
            height: '400px',
            width: '400px',
            color: 'gray',
            radius: '5px',
            margin: '',
        },
        {
            id:'1',
            selected: false,
            height: '200px',
            width: '200px',
            color: 'pink',
            radius: '5px',
            margin: '-8',
        }]
    }


let SelectedCanvasReducer = (state = initialState, action) => {
    if(action.type === 'SELECT_CANVAS') {
        const newCanvases = state.canvases.map((canvas)=>{
            if(canvas.id===action.canvasId){
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
        canvases : newCanvases
    }
    }else {
        return state;
    }
}

export default SelectedCanvasReducer;