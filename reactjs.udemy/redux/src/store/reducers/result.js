import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // Changed Data
            return {
                ...state,
                results: state.results.concat({
                    id: Date.now(),
                    value: action.result * 2
                })
            };

        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);

            return {
                ...state,
                results: updatedArray
            };

        default:
            return state;
    }
};

export default reducer;
