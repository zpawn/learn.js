import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (e) => {
        this.setState({ name: e.target.value });
    }

    ageChangedHandler = (e) => {
        this.setState({ age: e.target.value });
    }

    render () {
        return (
            <div className="AddPerson">
                <input
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.nameChangedHandler}
                />

                <input
                    type="number"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.ageChangedHandler}
                />

                <button onClick={() => this.props.personAdded({ ...this.state })}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;
