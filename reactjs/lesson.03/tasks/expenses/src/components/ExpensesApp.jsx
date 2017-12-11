import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

import {ExpensesIncome} from './ExpensesIncome.jsx';
import {ExpensesOutcome} from './ExpensesOutcome.jsx';

export class ExpensesApp extends React.Component {
    constructor (props) {
        super(props);

        this.state = { value: 0 };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e, value) {
        this.setState({ value });
    }

    render () {
        return (
            <div>
                <Paper>
                    <Tabs
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        value={this.state.value}
                        onChange={this.handleChange}>
                        <Tab label="Income"/>
                        <Tab label="Outcome"/>
                    </Tabs>
                </Paper>
                {this.state.value === 0 && <ExpensesIncome/>}
                {this.state.value === 1 && <ExpensesOutcome/>}
            </div>
        );
    }
}
