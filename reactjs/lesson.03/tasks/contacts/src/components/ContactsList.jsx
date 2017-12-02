import React from 'react';
import { Contact } from './Contact.jsx';
import './ContactsList.css';

export class ContactsList extends React.Component {
    constructor (props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.contacts = this.props.data;
        this.state = {
            displayedContacts: this.contacts.slice()
        };
    }

    handleSearch (event) {
        let searchQuery = event.target.value.toLowerCase(),
            displayedContacts = this.contacts.filter(el => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
            });

        this.setState({
            displayedContacts: displayedContacts
        });
    }

    render () {
        return <div className="contacts">
            <input type="text" className="search-field" onChange={this.handleSearch} />
            <ul className="contacts-list">
                {
                    this.state.displayedContacts.map(function(el) {
                        return <Contact
                            key={el.id}
                            name={el.name}
                            phone={el.phoneNumber}
                            image={el.image}
                            email={el.email}
                            address={el.address}
                        />;
                    })
                }
            </ul>
        </div>
    }
}
