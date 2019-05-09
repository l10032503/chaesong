import authentication from './authentication';
import recipe from './recipe';
import search from './search';
import {combineReducers} from 'redux';

export default combineReducers({
    authentication,
    recipe,
    search
});