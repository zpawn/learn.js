import React, { Component } from 'react';
import nanoid from 'nanoid';

import classes from './App.css';
import Person from './Person/Person';

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

        // or copy obj
        // const person = Object.assign({}, this.state.persons[personId]);

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
        let persons = null,
            btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map(person => {
                            return <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                click={this.deletePersonHandler.bind(this, person.id)}
                                changed={event => this.nameChangedHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            );

            btnClass = classes.Red;
        }

        let assignedClasses = [];

        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>

                <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>

                {persons}
            </div>
        );
    }
}

export default App;
