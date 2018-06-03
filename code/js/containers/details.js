import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Header, Image, Card } from 'semantic-ui-react'

class Details extends Component {
    render () {
        if(!this.props.contact) {
            return (<p>Choose contact..</p>)
        };

        return (
            <Card>
                <Image src={this.props.contact.photo} />
                <Card.Content>
                    <Card.Header>
                        {this.props.contact.name}
                    </Card.Header>
                    <Card.Meta>
                        {this.props.contact.company}
                    </Card.Meta>
                    <Card.Description>
                        <p>Phone: {this.props.contact.phone}</p>
                        <p>E-mail: {this.props.contact.email}</p>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    };
};

function mapStateToProps (state) {
    return {
        contact: state.action
    };
}

export default connect (mapStateToProps)(Details);