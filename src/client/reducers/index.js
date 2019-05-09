import authentication from './authentication';
import recipe from './recipe';
import personalpage from './personalpage'

import {combineReducers} from 'redux';

export default combineReducers({
    authentication,
    recipe,
    personalpage
});