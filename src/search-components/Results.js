import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, selectResult } from '../redux-store/actions/search';
import ResultCard from './Result-card';

class Results extends React.Component {

	render() {
		const { items, setSearchTerm } = this.props


		return (

			<div className="results">
				{items.map((item, index) => {
					return (

						<ResultCard
							item={item}
							key={item.id}
							setSearchTerm={setSearchTerm} />

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

export default connect(mapStateToProps, { selectResult, setSearchTerm })(Results);