import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        showPersons: false
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    }

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>

                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>

                {!this.state.showPersons
                    ? null
                    : <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age} />
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, 'Maximus')}
                            changed={this.nameChangedHandler}>My Hobbies: 'Racing'</Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}/>
                    </div>
                }
            </div>
        );
    }
}

export default App;
