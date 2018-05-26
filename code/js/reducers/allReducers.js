import {combineReducers} from 'redux';
import ContactReducers from './contacts.js';
import ActiveContact from './contactActive.js'

const AllReducers = combineReducers({
    contacts: ContactReducers,
    active: ActiveContact
});

export default AllReducers; 