import { combineReducers } from 'redux';
import drawer from './drawer';
import user from './user';
import SelectedCanvasReducer from './SelectedCanvasReducer';
import AddPhotoReducer from './AddPhotoReducer';
import ResultsReducer from './reducer-results';
import SearchTermReducer from './reducer-search-term';

export default combineReducers({
    drawer,
    user,
    ResultsReducer,
    SearchTermReducer,
    pho: AddPhotoReducer,
    can: SelectedCanvasReducer
})