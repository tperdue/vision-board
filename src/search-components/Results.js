import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, selectResult, addPhoto } from '../redux-store/actions/search';
import ResultCard from './Result-card';


class Results extends React.Component {

	render() {
		const {items, setSearchTerm, selectResult, addPhoto} = this.props
		
		return (
			
			<div className="results">
				{items.map( (item,index) => {
					return  (
						<ResultCard 
						item={item}
						key={item.id} 
						selectResult={(item) => { addPhoto(item.webformatURL)}}
						setSearchTerm={setSearchTerm}/>
					)
				})}	
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		items: state.searchResultReducer.all,
		searchTerm: state.searchTermReducer
	};
}

// const matchDispatchToProps = (dispatch) => {
// 	return {
// 			addImage: (image)=>dispatch({type:'ADD_IMAGE', payload: image }),
// 	}
// }

export default connect ( mapStateToProps, {selectResult, setSearchTerm, addPhoto}) (Results);


