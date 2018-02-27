import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import AboutPage from './components/AboutPage.jsx';

class App extends React.Component {
    render () {
        return (
            <h1>Hello, Messages!</h1>
        );
    }
}

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route />
        </Route>
    </Router>,
    document.getElementById('mount-point')
);
