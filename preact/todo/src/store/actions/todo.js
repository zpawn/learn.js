import * as actionTypes from './actions';

export const addTask = (task) => {
    return {
        type: actionTypes.ADD_TASK,
        task: task
    }
};

export const removeTask = (id) => {
    return {
        type: actionTypes.REMOVE_TASK,
        taskId: id
    }
};
