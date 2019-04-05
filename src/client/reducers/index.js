import authentication from './authentication';
import recipe from './recipe';

import {combineReducers} from 'redux';

export default combineReducers({
    authentication,
    recipe
});