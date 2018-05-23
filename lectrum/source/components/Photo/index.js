// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export default class Photo extends Component {
    state = {
        isOverlayed: false,
    }

    _show = () => {
        this.setState({ isOverlayed: true });
    }

    _hide = () => {
        this.setState({ isOverlayed: false });
    }

    render () {

        const { src, likes, comments } = this.props;
        const { isOverlayed } = this.state;

        const actions = isOverlayed ? (
            <div className = { Styles.overlay }>
                <div className = { Styles.heart }>{ likes }</div>
                <div className = { Styles.comment }>{ comments }</div>
            </div>
        ) : null;

        return (
            <div className = { Styles.photo } onMouseEnter = { this._show } onMouseLeave = { this._hide }>
                <img src = { src } />
                {actions}
            </div>
        );
    }
}
