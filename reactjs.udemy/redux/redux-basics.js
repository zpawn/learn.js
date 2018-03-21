const redux = require('redux'),
    createStore = redux.createStore,

    initState = {
        counter: 0
    };

// Reducer
const rootReducer = (state = initState, action) => {
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action

// Subscription
