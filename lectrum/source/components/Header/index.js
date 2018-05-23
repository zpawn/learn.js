// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export default class Header extends Component {
    render () {
        return (
            <div className = { Styles.header }>
                <div className = { Styles.layout }>
                    <div>
                        <a />
                    </div>
                    <input placeholder = 'Search' type = 'text' />
                    <nav>
                        <a className = { Styles.explore } />
                        <a className = { Styles.likes } />
                        <a className = { Styles.profile } />
                    </nav>
                </div>
            </div>
        );
    }
}
