import React from 'react';
import ReactDOM from 'react-dom';
import { ContactsList } from './components/ContactsList.jsx';

const CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: './../img/darth.vader.png',
        email: 'darth.vader@me.com',
        address: 'Tatooine'
    }, {
        id: 2,
        name: 'Leia Organa',
        phoneNumber: '+250966344466',
        image: './../img/leia.png',
        email: 'princess.leia@gmail.com',
        address: 'Alderaan'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: './../img/luk.png',
        email: 'luke.skywalker@un.com',
        address: 'Tatooine'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: './../img/chewbacca.png',
        email: 'chewbacca@gmail.com',
        address: 'Kashyyyk'
    }
];

ReactDOM.render(
    <ContactsList data={CONTACTS}/>,
    document.getElementById('mount-point')
);
