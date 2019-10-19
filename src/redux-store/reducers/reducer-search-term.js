import { SEARCH_TERM_SELECTED } from '../actions/search';

export default function (state = '', action) {

    switch (action.type) {
        case SEARCH_TERM_SELECTED:
            return action.payload;

        default:
            return state;
    }

}