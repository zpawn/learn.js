class ToDoNew extends React.Component {
    render () {
        return (
            <div className="todo__new">
                <form onSubmit={this.props.onNewTaskSubmit}>
                    <input className="form-control"
                           value={this.props.value}
                           type="text"
                           id="newTask"
                           placeholder="What you need to do?"
                           onChange={this.props.onNewTaskChange}
                    />
                </form>
            </div>
        );
    }
}

class ToDoTask extends React.Component {
    render () {
        return (
            <li className={`todo__list-item todo__task ${this.props.done ? 'todo__task-completed' : ''}`}>
                <label className="custom-control custom-checkbox todo__task-done">
                    <input className="custom-control-input"
                           type="checkbox"
                           defaultChecked={this.props.done}
                           onClick={this.props.onToggleCompleted}
                    />
                    <span className="custom-control-indicator"/>
                </label>
                <div className="todo__task-name">{this.props.name}</div>
                <a className="todo__task-delete" href="javascript:void(0)" onClick={this.props.onDelete}>&times;</a>
            </li>
        );
    }
}

class ToDoList extends React.Component {
    render () {
        return (
            <ul className="list-unstyled todo__list">
                {
                    !this.props.list.length
                        ? "Empty list"
                        : this.props.list.map(
                            task => <ToDoTask
                                key={task.id}
                                name={task.name}
                                done={task.done}
                                onDelete={this.props.onTaskDelete.bind(null, task)}
                                onToggleCompleted={this.props.onToggleCompleted.bind(null, task)}
                            />
                    )
                }
            </ul>
        );
    }
}

class ToDoFilter extends React.Component {
    render () {
        return (
            <ul className="list-unstyled todo__filter">
                <li>
                    <button className={`btn ${this.props.active === 'all' ? 'btn-outline-dark' : 'btn-link'}`}
                            type="button"
                            onClick={this.props.onFilterChange.bind(null, 'all')}>
                        All
                    </button>
                </li>
                <li>
                    <button className={`btn ${this.props.active === 'new' ? 'btn-outline-dark' : 'btn-link'}`}
                            type="button"
                            onClick={this.props.onFilterChange.bind(null, 'new')}>
                        New
                    </button>
                </li>
                <li>
                    <button className={`btn ${this.props.active === 'completed' ? 'btn-outline-dark' : 'btn-link'}`}
                            type="button"
                            onClick={this.props.onFilterChange.bind(null, 'completed')}>
                        Completed
                    </button>
                </li>
            </ul>
        );
    }
}

class ToDo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [],
            newTask: '',
            activeFilter: 'all'
        };

        this.list = [];

        this.handleNewTaskSubmit = this.handleNewTaskSubmit.bind(this);
        this.handleNewTaskChange = this.handleNewTaskChange.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
    }

    componentDidMount () {
        this.list = this._getLocalStorage();
        this.setState({
            list: this.list.slice()
        });
    }

    handleNewTaskChange (e) {
        this.setState({newTask: e.target.value});
    }

    handleNewTaskSubmit (e) {
        e.preventDefault();

        this.list.unshift({
            id: Date.now(),
            name: this.state.newTask.trim(),
            done: false
        });

        this.setState({
            list: this._getFiltredTasks(this.state.activeFilter),
            newTask: ''
        }, this._updateLocalStorage());
    }

    handleTaskDelete (deleteTask) {
        this.list = this.list.filter(task => task.id !== deleteTask.id);
        this.setState({list: this.list.slice()}, this._updateLocalStorage());
    }

    handleFilterChange (newFilter) {
        if (this.state.activeFilter !== newFilter) {
            this.setState({
                activeFilter: newFilter,
                list: this._getFiltredTasks(newFilter)
            });
        }
    }

    handleToggleCompleted (updateTask) {
        this.list = this.list.map(task => {
            if (task.id === updateTask.id) {
                task.done = !task.done;
            }
            return task;
        });
        this.setState({list: this.list.slice()}, this._updateLocalStorage());
    }

    render () {
        return (
            <div className="todo">
                <ToDoNew value={this.state.newTask}
                         onNewTaskSubmit={this.handleNewTaskSubmit}
                         onNewTaskChange={this.handleNewTaskChange}
                />
                <ToDoList list={this.state.list}
                          onTaskDelete={this.handleTaskDelete}
                          onToggleCompleted={this.handleToggleCompleted}
                />
                <ToDoFilter active={this.state.activeFilter} onFilterChange={this.handleFilterChange}/>
            </div>
        );
    }

    _getFiltredTasks (filter) {
        let newList = [];

        switch (filter) {
            case 'all': newList = this.list.slice(); break;
            case 'new': newList = this.list.filter(task => task.done === false); break;
            case 'completed': newList = this.list.filter(task => task.done === true); break;
        }

        return newList;
    }

    _getLocalStorage () {
        let list = JSON.parse(localStorage.getItem('list'));
        return list ? list : [];
    }

    _updateLocalStorage () {
        localStorage.setItem('list', JSON.stringify(this.list));
    }
}

ReactDOM.render(
    <ToDo/>,
    document.getElementById('mount-point')
);
