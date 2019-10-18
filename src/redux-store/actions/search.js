import axios from 'axios';
// import { API_KEY } from '../configs/api';
const API_KEY = '13847963-e1c56cf842da237e744ecfc5b';


export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const SEARCH_TERM_SELECTED = 'SEARCH_TERM_SELECTED';
export const ITEM_SELECTED = 'ITEM_SELECTED';

export const setSearchTerm = (searchTerm) => (dispatch) => {
	return dispatch({
		type: 'SEARCH_TERM_SELECTED',
		payload: searchTerm
	})
}

export const fetchResults = (searchTerm) => {
	const API_URL = 'https://pixabay.com/api';
	return (dispatch) => {
		var requestUrl = API_URL + '/?key=' + API_KEY + '&q=' + searchTerm + '&image_type=photo';
		axios.get(requestUrl)
			.then((request) => {
				dispatch({
					type: 'FETCH_SEARCH_RESULTS',
					payload: request
				})
			})
	}
}

export function selectResult(resultItem) {
	return {
		type: 'ITEM_SELECTED',
		payload: resultItem
	}
}

export function addPhoto(image){
	console.log("Adding photo...", image)
	return {
		type: 'ADD_IMAGE',
		payload: image
	}
}