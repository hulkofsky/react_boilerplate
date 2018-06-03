import {combineReducers} from 'redux';
import ContactReducers from './contacts.js';
import ContactAction from './contactActions.js'

const AllReducers = combineReducers({
    contacts: ContactReducers,
    action: ContactAction,
});

export default AllReducers; 