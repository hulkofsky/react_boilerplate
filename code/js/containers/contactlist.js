import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/actions';
import { Image, List } from 'semantic-ui-react'

class ContactList extends Component {
    showlist(){
        return this.props.contacts.map((contact) => {
            return (
                <List.Item onClick={() => this.props.select(contact)} key={contact.id}>
                    <Image avatar src={contact.photo}/>
                    <List.Content>
                        <List.Header>{contact.name}</List.Header>
                        {contact.company}
                    </List.Content>
                </List.Item>
            );
        });
    };
    render() {
        return (
            <List animated celled verticalAlign='middle'>
                {this.showlist()}
            </List>
        );
    }
}

function mapStateToProps (state) {
    return {
        contacts: state.contacts
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({select: select}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);