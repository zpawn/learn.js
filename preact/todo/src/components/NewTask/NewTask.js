import { h } from 'preact';

const newTask = (props) => (
    <div>
        <form onSubmit={props.onAddNewTask}>
            <input
                type="text"
                placeholder="New Task..."
                value={props.task}
                onInput={props.onInputChange}
            />
        </form>
    </div>
);

export default newTask;
