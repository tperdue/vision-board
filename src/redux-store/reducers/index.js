import { combineReducers } from 'redux';
import drawer from './drawer';
import user from './user';
import SelectedCanvasReducer from './SelectedCanvasReducer';
import AddPhotoReducer from './AddPhotoReducer';
import searchResultReducer from './reducer-results';
import searchTermReducer from './reducer-search-term';
import fullScreenDialog from './full-screen-dialog';

import board from './board';
import alertDialogs from './alerts-dialogs';

import color from './color-picker';


export default combineReducers({
    drawer,
    user,
    searchResultReducer,
    searchTermReducer,
    fullScreenDialog,
    pho: AddPhotoReducer,
    can: SelectedCanvasReducer,
    board,
    alertDialogs,
    color,
})