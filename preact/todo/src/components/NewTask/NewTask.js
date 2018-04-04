import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as actionCreators from '../../store/actions/index';

class NewTask extends Component {
    state = {
        task: ''
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAddTask(this.state.task);
        this.setState({ task: '' });
    }

    inputChangeHandler = (e) => {
        this.setState({ task: e.target.value });
    }

    render () {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="New Task..."
                        value={this.state.task}
                        onInput={this.inputChangeHandler}
                    />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (task) => dispatch(actionCreators.addTask(task))
    };
};

export default connect(null, mapDispatchToProps)(NewTask);
