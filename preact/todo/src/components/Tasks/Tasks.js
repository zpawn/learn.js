import { h } from 'preact';

import classes from './Tasks.css';
import Task from './Task/Task';

const tasks = (props) => {

    let tasks = 'Empty List';

    if (props.tasks.length) {
        tasks = (
            <ul className={classes.Tasks}>
                {
                    props.tasks.map((task, id) => (
                        <Task id={id} task={task} removed={props.onRemoveTask} />
                    ))
                }
            </ul>
        );
    }

    return (
        <div>
            <h3>Tasks List:</h3>
            {tasks}
        </div>
    );
};

export default tasks;
