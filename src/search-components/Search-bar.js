import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, fetchResults } from '../redux-store/actions/search';
import Results from './Results';
import '../CSS/Results.css'


class SearchBar extends React.Component {

	constructor(props) {
		super(props)

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchResults(this.props.searchTerm);
	}


	onInputChange(event) {
		this.props.setSearchTerm(event.target.value);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit} className="search-bar">
					<input
						placeholder="Enter search..."
						value={this.props.searchTerm}
						onChange={this.onInputChange} />
					<span>
						<button type="submit">Submit</button>
					</span>
				</form>
				<br />
				<Results />
			</div>
		)
	}

}


function mapStateToProps(state) {
	console.log('STATE', state);
	return {
		searchTerm: state.searchTermReducer,
		searchResult: state.searchResultReducer
	}
}


// connect() will automatically bind dispatch to your actions 
// if they are passed in as an object of function names.
export default connect(mapStateToProps, { fetchResults, setSearchTerm })(SearchBar);