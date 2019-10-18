import { combineReducers } from 'redux';
import drawer from './drawer';
import user from './user';
import SelectedCanvasReducer from './SelectedCanvasReducer';
import AddPhotoReducer from './AddPhotoReducer';
import searchResultReducer from './reducer-results';
import searchTermReducer from './reducer-search-term';

export default combineReducers({
    drawer,
    user,
    searchResultReducer,
    searchTermReducer,
    pho: AddPhotoReducer,
    can: SelectedCanvasReducer
})