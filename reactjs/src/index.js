import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './index.css';
import App from './App';

ReactDOM.render(
    <Fragment>
        <header className={classes.header}>
            Header
        </header>

        <div className={classes.content}>
            <App/>
        </div>

        <footer className={classes.footer}>
            Footer
        </footer>
    </Fragment>,
    document.getElementById('mountPoint')
);
