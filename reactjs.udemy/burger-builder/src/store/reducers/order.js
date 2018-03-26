import * as actionTypes from '../actions/actionTypes';

const initState = {
    orders: [],
    leading: false,
    purchased: false
};

const reducer = (state = initState, action) => {

    console.log('>>> orderReducer:', state, action);

    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            };

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
                purchased: true,
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
