import React from 'react';
import ContactList from '../containers/contactlist.js';
import Details from '../containers/details.js'

const WebPage = () => (
    <div>
        <h3>Contacts:</h3>
        <ContactList />
        <hr />
        <h3>Details:</h3>
        <Details />
    </div>
);

export default WebPage;