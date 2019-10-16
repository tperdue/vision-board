import AddPhoto from '../Components/Addphoto';
import { connect }from 'react-redux';


// const matchStateToProps = (state) =>{
//     return {images: state.images}      
// }

const matchDispatchToProps = (dispatch) => {
    return {
        addImage: (image)=>dispatch({type:'ADD_IMAGE', payload: image }),
    }
}






export default connect(null, matchDispatchToProps)(AddPhoto)