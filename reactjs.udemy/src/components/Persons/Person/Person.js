import React, { Component } from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor (props) {
        super(props);
        console.log('[Person.js] constructor', props);
    }

    componentWillMount () {
        console.log('[Person.js] componentWillMount');
    }

    componentDidMount () {
        console.log('[Person.js] componentDidMount');
    }

    componentWillUnmount () {
        console.log('[Person.js] componentWillUnmount');
    }

    render () {
        console.log('[Person.js] render');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
