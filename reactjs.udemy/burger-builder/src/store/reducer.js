import * as actionTypes from './actions';

const initState = {
    ingredients: null,
    totalPrice: 4
};

const reducer = (state = initState, action) => {

    switch (action.type) {

        case actionTypes.ADD_INGREDIENTS:
            return state;

        case actionTypes.REMOVE_INGREDIENTS:
            return state;

        default:
            return state;
    }
};

export default reducer;
