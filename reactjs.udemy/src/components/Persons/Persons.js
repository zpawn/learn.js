import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor (props) {
        super(props);
        console.log('[Persons.js] constructor');
    }

    componentWillMount () {
        console.log('[Persons.js] componentWillMount');
    }

    componentDidMount () {
        console.log('[Persons.js] componentDidMount');
    }

    render() {
        console.log('[Persons.js] render');
        return this.props.persons.map(person => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(person.id)}
                changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default Persons;
