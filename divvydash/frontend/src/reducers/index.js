import { combineReducers } from 'redux';
import stations from './stations';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    stations,
    errors,
    messages
});