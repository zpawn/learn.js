import React, { PureComponent } from 'react';
import nanoid from 'nanoid';

import classes from './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

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
            showPersons: false,
            toggleClicked: 0
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
        const doesShow = this.state.showPersons;
        this.setState( (prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
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
            <Aux>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
