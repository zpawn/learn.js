import React from 'react';
import './Contact.css';

export class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isOpen: false
        };
    }

    handleClick (e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <li className="contact" onClick={this.handleClick}>
                <img className="contact-image" src={this.props.image} alt={this.props.name} width="80px" height="80px" />
                <div className="contact-info">
                    <div className="contact-name">{this.props.name}</div>
                    <div className="contact-number">{this.props.phone}</div>
                    <div className={this.state.isOpen ? '' : 'hidden'}>{this.props.address}</div>
                    <div className={this.state.isOpen ? '' : 'hidden'}>{this.props.email}</div>
                </div>
            </li>
        );
    }
}
