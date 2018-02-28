import React from 'react';
import './Char.css';

const char = props => {
    return <span className="Char" onClick={props.clicked}>{props.char}</span>
};

export default char;
