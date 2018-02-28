import React from 'react';

const validation = props => {

    let message = '';

    if (props.length < 5) {
        message = 'Text too short';
    } else if (props.length > 10) {
        message = 'Text long enough';
    } else {
        message = 'Text of normal length';
    }

    return <p>{message}</p>
};

export default validation;
