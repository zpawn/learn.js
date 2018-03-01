import React, { Component } from 'react';
import nanoid from 'nanoid';
import './App.css';
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

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;


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

            style.backgroundColor = 'red';
        }

        let classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>

                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>

                {persons}
            </div>
        );
    }
}

export default App;
