import { FETCH_SEARCH_RESULTS, ITEM_SELECTED } from '../actions/search';

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
		case ITEM_SELECTED:
				console.log("Payload... ", action.payload)
				return {
					...state,
					selected: action.payload
				}

		default:
			return state;
	}
}