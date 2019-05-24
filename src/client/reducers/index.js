import authentication from './authentication';
import recipe from './recipe';
import personalpage from './personalpage'
import search from './search';
import recommendpage from './recommendpage';
import {combineReducers} from 'redux';
import ingredient from './ingredient';

export default combineReducers({
    authentication,
    recipe,
    personalpage,
    search,
    ingredient,
    recommendpage
});