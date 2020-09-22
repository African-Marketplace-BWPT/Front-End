import {combineReducers} from 'redux';
import auth from './auth';
import listing from './listing';
import cart from './cart';

export default combineReducers({auth, listing, cart});