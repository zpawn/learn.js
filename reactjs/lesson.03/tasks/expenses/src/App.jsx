import React from 'react';
import ReactDOM from 'react-dom';
import { ExpensesApp } from './components/ExpensesApp.jsx';
import './App.css';

class Expenses extends React.Component {
    render () {
        return (
            <div className="container">
                <ExpensesApp/>
            </div>
        );
    }
}

ReactDOM.render(
    <Expenses/>,
    document.getElementById('mount-point')
);
