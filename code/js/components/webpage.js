import React from 'react';
import ContactList from '../containers/contactlist.js';
import Details from '../containers/details.js';
import { Header, Grid, Input, Container } from 'semantic-ui-react';

const WebPage = () => (
    <Grid>
        <Grid.Column width={6}>
            <Header size='large'>Contacts:</Header>
            <ContactList />
        </Grid.Column>
        <Grid.Column width={10}>
            <Header size='large'>Details:</Header>
            <Details />
        </Grid.Column>    
    </Grid>
);

export default WebPage;