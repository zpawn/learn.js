// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import avatar from '../../theme/assets/images/joe.jpg';

export default class Profile extends Component {
    render () {
        return (
            <div className = { Styles.profile }>
                <div className = { Styles.layout }>
                    <img src = { avatar } />
                    <div>
                        <div className = { Styles.nickname }>Joe</div>
                        <div className = { Styles.stats }>
                            photos: 50
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
