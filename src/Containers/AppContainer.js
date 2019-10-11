import App from '../App';
import { connect }from 'react-redux';


const matchStateToProps = (state) =>{
    console.log(state)
    return {canvases: state.canvases}      
}

const matchDispatchToProps = (dispatch) => {
    return {
        clicked: (canvasId)=>dispatch({type:'SELECT_CANVAS', canvasId}),
    }
}





export default connect(matchStateToProps, matchDispatchToProps)(App)