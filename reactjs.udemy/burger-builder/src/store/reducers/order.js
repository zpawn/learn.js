import * as actionTypes from '../actions/actionTypes';

const initState = {
    orders: [],
    leading: false,
    purchased: false
};

const reducer = (state = initState, action) => {

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

        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            };

        case actionTypes.FETCH_ORDERS_SUCCESS:
            const fetchedOrders = [];

            for (let orderId in action.orders) {
                fetchedOrders.push({
                    ...action.orders[orderId],
                    id: orderId
                });
            }

            return {
                ...state,
                orders: fetchedOrders,
                loading: false
            };

        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
};

export default reducer;
