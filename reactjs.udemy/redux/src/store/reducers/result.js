import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const storeResult = (state, action) => {
    const newResult = state.results.concat({
        id: Date.now(),
        value: action.result * 2
    });
    return updateObject(state, { results: newResult });
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:  return storeResult(state, action);
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
        default:                        return state;
    }
};

export default reducer;
