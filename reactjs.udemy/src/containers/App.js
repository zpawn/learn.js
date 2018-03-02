import React, { Component } from 'react';
import nanoid from 'nanoid';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

import classes from './App.css';

class App extends Component {

    state = {
        persons: [
            { id: nanoid(), name: 'Max', age: 28 },
            { id: nanoid(), name: 'Manu', age: 29 },
            { id: nanoid(), name: 'Stephanie', age: 26 }
        ],
        showPersons: false
    }

    nameChangedHandler = (event, id) => {

        const persons = [ ...this.state.persons ];
        const personId = this.state.persons.findIndex(p => p.id === id);
        const person = { ...this.state.persons[personId] };

        person.name = event.target.value;

        persons[personId] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
