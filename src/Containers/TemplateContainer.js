import Canvas from '../Components/Canvas';
import { connect }from 'react-redux';


const matchStateToProps = (state) =>{
    return ({  
        id: props.id,
        selected: props.selected,
        height: props.height,
        width: props.width,
        border: props.border,
        backgroundColor: props.color,
        borderRadius: props.radius,
        margin: props.margin
    }
    )
}

const matchDispatchToProps = (dispatch) => {
    return {
        clicked: ()=>dispatch({type:'ADD_CANVAS'}),
    }
}





export default connect(matchStateToProps, matchDispatchToProps)(Canvas)