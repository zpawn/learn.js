import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // Changed Data
            const newResult = state.results.concat({
                id: Date.now(),
                value: action.result * 2
            });
            return updateObject(state, { results: newResult });

        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, { results: updatedArray });

        default:
            return state;
    }
};

export default reducer;
