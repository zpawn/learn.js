import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            };

        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            };

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: Date.now(),
                    value: state.counter
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
