import axios from 'axios';
// import { API_URL, API_KEY } from '../configs/API';
const API_URL = 'https://pixabay.com/api';
const API_KEY = '13847963-e1c56cf842da237e744ecfc5b';



export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const SEARCH_TERM_SELECTED = 'SEARCH_TERM_SELECTED';
export const ITEM_SELECTED = 'ITEM_SELECTED';

export function setSearchTerm(searchTerm) {
	return {
		type: 'SEARCH_TERM_SELECTED',
		payload: searchTerm
	}
}

export const fetchResults = (searchTerm) => async dispatch => {
	var imageType = 'photo';
	var requestUrl = API_URL + '/?key=' + API_KEY + '&q=' + searchTerm + '&image_type=' + imageType;
	

	try {
		const request = await axios.get(requestUrl);
		

		dispatch({
				type: 'FETCH_SEARCH_RESULTS',
				payload: request
			}
		)
	}
	catch(error) {
		console.log(error)
	}

	
}

export function selectResult(resultItem) {
	return {
		type: 'ITEM_SELECTED',
		payload: resultItem
	}
}