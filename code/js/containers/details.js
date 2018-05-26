import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render () {
        if(!this.props.contact) {
            return (<p>Choose auto..</p>)
        };

        return (
            <div>
                <h2>{this.props.contact.name}</h2>
                <img src={this.props.contact.photo} />
                <p>Phone: {this.props.contact.phone}</p>
                <p>E-mail: {this.props.contact.email}</p>
                <p>Company: {this.props.contact.company}</p>
            </div>
        );
    };
};

function mapStateToProps (state) {
    return {
        contact: state.active
    };
}

export default connect (mapStateToProps)(Details);