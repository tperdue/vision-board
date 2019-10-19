let initialState = {images:[]}


let AddPhotoReducer = (state = initialState, action) => {
        console.log("Adding photo###", action)
        if(action.type === 'ADD_IMAGE') {
            return {
                ...state,
                images: state.images.concat(action.payload)
            }
        } else {
            return {
                ...state,
                }
            }  
            
          
    }
    
export default AddPhotoReducer;