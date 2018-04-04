import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import classes from './Tasks.css';
import Task from './Task/Task';
import * as actionCreators from '../../store/actions/index';

class Tasks extends Component {
    removeTaskHandler = (id) => {
        this.props.onRemoveTask(id);
    }

    render () {
        let tasks = 'Empty List';

        if (this.props.tasks.length) {
            tasks = (
                <ul className={classes.Tasks}>
                    {
                        this.props.tasks.map((task, id) => (
                            <Task id={id} task={task} removed={this.removeTaskHandler} />
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
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
};

const mapDispatchTpProps = dispatch => {
    return {
        onRemoveTask: (id) => dispatch(actionCreators.removeTask(id))
    }
};

export default connect(mapStateToProps, mapDispatchTpProps)(Tasks);
