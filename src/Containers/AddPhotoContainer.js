import AddPhoto from '../Components/Addphoto';
import { connect }from 'react-redux';


// const matchStateToProps = (state) =>{
//     return {images: state.images}      
// }

const matchDispatchToProps = (dispatch) => {
    return {
        AddImage: (info)=>dispatch({type:'ADD_IMAGE', payload: info}),
    }
}






export default connect(null, matchDispatchToProps)(AddPhoto)