import { FETCH_SEARCH_RESULTS } from '../actions/search';

const INTIAL_STATE = { all: [] };

export default function(state=INTIAL_STATE, action){

	switch(action.type){

		case FETCH_SEARCH_RESULTS:
			if (action.payload !== undefined) {
				return { 
					...state, 
					all: action.payload.data.hits
				};
			}
		
		break;

		default:
			return state;
	}
}