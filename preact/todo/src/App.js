import { h, Component } from 'preact';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

class App extends Component {

    state = {
        newTask: '',
        tasks: []
    }

    submitAddNewTaskHandler = e => {
        e.preventDefault();

        let updateTasks = [...this.state.tasks];
        updateTasks.push(this.state.newTask);

        this.setState({
            newTask: '',
            tasks: updateTasks
        });
    }

    inputNewTaskChangeHandler = (e) => {
        this.setState({ newTask: e.target.value });
    }

    removeTaskHandler = (removeTaskId) => {
        this.setState({
            tasks: this.state.tasks.filter((task, taskId) => taskId !== removeTaskId)
        });
    }

    render () {
        return (
            <div>
                <NewTask
                    task={this.state.newTask}
                    onAddNewTask={this.submitAddNewTaskHandler}
                    onInputChange={this.inputNewTaskChangeHandler}
                />
                <Tasks
                    tasks={this.state.tasks}
                    onRemoveTask={this.removeTaskHandler}
                />
            </div>
        );
    }
}

export default App;
