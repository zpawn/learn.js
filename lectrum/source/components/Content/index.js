// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

// Components
import Profile from '../Profile';
import Photos from '../Photos';

export default class Content extends Component {
    render () {
        return (
            <div className = { Styles.content }>
                <Profile />
                <Photos />
            </div>
        );
    }
}
