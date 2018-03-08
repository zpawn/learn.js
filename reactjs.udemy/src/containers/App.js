import React, { PureComponent } from 'react';
import nanoid from 'nanoid';

import classes from './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {

    constructor (props) {
        super(props);
        console.log('[App.js] Constructor', props);

        this.state = {
            persons: [
                { id: nanoid(), name: 'Max', age: 28 },
                { id: nanoid(), name: 'Manu', age: 29 },
                { id: nanoid(), name: 'Stephanie', age: 26 }
            ],
            showPersons: false
        };
    }

    componentWillMount () {
        console.log('[App.js] componentWillMount');
    }

    componentDidMount () {
        console.log('[App.js] componentDidMount');
    }

    componentWillReceiveProps (nextProps) {
        console.log('[UPDATE App.js] componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log('[UPDATE App.js] shouldComponentUpdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons
    //         || nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate (nextProps, nextState) {
        console.log('[UPDATE App.js] componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate () {
        console.log('[UPDATE App.js] componentDidUpdate');
    }

    ////

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

        console.log('[App.js] render');

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <WithClass classes={classes.App}>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </WithClass>
        );
    }
}

export default App;
