import * as actionTypes from '../actions/actionTypes';

const initState = {
    orders: [],
    leading: false
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            };

            return {
                ...state,
                leading: false,
                orders: state.orders.concat(newOrder)
            };

        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                leading: false
            };

        default:
            return state;
    }
};

export default reducer;
