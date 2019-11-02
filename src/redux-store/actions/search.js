import axios from 'axios';
import uploadcare from 'uploadcare-widget'

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
		var requestUrl = API_URL + '/?key=' + API_KEY + '&q=' + searchTerm + '&image_type=photo' + '&order=popular&per_page=52';
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

export const addPhoto = (image) => async (dispatch) => {
	console.log("Adding photo...", image)

	//check if uploadcare
	const imageUrl = new URL(image);
	if (imageUrl.hostname === 'pixabay.com') {
		const UPLOADCARE_PUBLIC_KEY = '512c413de32b68f92c92';

		const file = uploadcare.fileFrom('url', image, {
			publicKey: UPLOADCARE_PUBLIC_KEY,
			imagesOnly: true,
			crop: '0x0'
		});

		console.log(image);
		file.done(function (fileInfo) {
			// Upload has successfully completed and a file is ready.
			const newUrl = `${fileInfo.cdnUrl}${fileInfo.name}`;
			dispatch({
				type: 'ADD_IMAGE',
				payload: newUrl
			})

		}).fail(function (error, fileInfo) {
			// Upload failed, or something else went wrong, a file is not ready.
			console.log(error, fileInfo);
		});

	}
	else {

		dispatch({
			type: 'ADD_IMAGE',
			payload: image
		})

	}


}