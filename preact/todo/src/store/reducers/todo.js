import * as actionTypes from '../actions/actions';

const initState = {
    tasks: []
};

const addTasks = (state, action) => {
    let updateTasks = [...state.tasks];
    updateTasks.push(action.task);
    return {
        ...state,
        tasks: updateTasks
    }
};

const removeTask = (state, action) => {
    let updateTasks = [...state.tasks];
    updateTasks = updateTasks.filter((task, taskId) => taskId !== action.taskId);
    return {
        ...state,
        tasks: updateTasks
    }
};

const todo = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK: return addTasks(state, action);
        case actionTypes.REMOVE_TASK: return removeTask(state, action);
        default: return state;
    }
};

export default todo;
