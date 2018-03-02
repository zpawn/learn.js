import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
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
