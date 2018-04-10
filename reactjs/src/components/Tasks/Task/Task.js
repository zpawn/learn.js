import React from 'react';

import classes from './Task.css';

const task = (props) => (
    <li className={classes.Task}>
        <button className={classes.Task__remove}
                type="button"
                onClick={() => props.removed(props.id)}
        >&times;</button>
        {props.task}
    </li>
);

export default task;