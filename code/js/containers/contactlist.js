import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/actions';

class ContactList extends Component {
    showlist(){
        return this.props.contacts.map((contact) => {
            return (
                <li onClick={() => this.props.select(contact)} key={contact.id}>{contact.name}</li>
            );
        });
    };
    render() {
        return (
            <ol>
                {this.showlist()}
            </ol>
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