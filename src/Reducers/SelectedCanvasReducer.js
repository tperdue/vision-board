let initialState = {
    canvases: [
        {
            id: '0',
            selected: false,
            height: '400px',
            width: '70%',
            color: 'gray',
            radius: '',
            margin: '0px 5px 5px 0px',
        },
        {
            id:'1',
            selected: false,
            height: '400px',
            width: '25%',
            color: 'pink',
            radius: '',
            margin: '5px',
        },
        {
            id:'2',
            selected: false,
            height: '200px',
            width: '200px',
            color: 'pink',
            radius: '',
            margin: '5px',
        },
        {
            id:'3',
            selected: false,
            height: '200px',
            width: '200px',
            color: 'pink',
            radius: '',
            margin: '5px',
        },
        {
            id:'4',
            selected: false,
            height: '200px',
            width: '200px',
            color: 'pink',
            radius: '',
            margin: '5px',
        },
        {
            id:'5',
            selected: false,
            height: '200px',
            width: '200px',
            color: 'pink',
            radius: '',
            margin: '5px',
        },
        {
            id:'6',
            selected: false,
            height: '400px',
            width: '400px',
            color: 'pink',
            radius: '',
            margin: '5px',
        },
        {
            id:'7',
            selected: false,
            height: '500px',
            width: '200px',
            color: 'pink',
            radius: '',
            margin: '5px',
        },
        {
            id:'8',
            selected: false,
            height: '200px',
            width: '200px',
            color: 'pink',
            radius: '',
            margin: '5px',
        }
    
    ]
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