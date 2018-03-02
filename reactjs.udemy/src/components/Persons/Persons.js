import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor (props) {
        super(props);
        console.log('[Persons.js] constructor', props);
    }

    componentWillMount () {
        console.log('[Persons.js] componentWillMount');
    }

    componentDidMount () {
        console.log('[Persons.js] componentDidMount');
    }

    componentWillUnmount () {
        console.log('[Persons.js] componentWillUnmount');
    }

    componentWillReceiveProps (nextProps) {
        console.log('[UPDATE Persons.js] componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('[UPDATE Persons.js] shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons
            || nextProps.clicked !== this.props.clicked
            || nextProps.changed !== this.props.changed;
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('[UPDATE Persons.js] componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate () {
        console.log('[UPDATE Persons.js] componentDidUpdate');
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
