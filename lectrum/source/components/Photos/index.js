// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import * as photosMap from 'theme/assets/images';
import photos from './photos';

// Components
import Photo from '../Photo';

export default class Photos extends Component {
    render () {
        const photosJSX = photos.map((photo) => {
            return <Photo
                comments = { photo.comments }
                key = { photo.id }
                likes = { photo.likes }
                src = { photosMap[photo.name] }
            />;
        });

        return (
            <div className = { Styles.photos }>
                <div className = { Styles.layout }>{photosJSX}</div>
            </div>
        );
    }
}
