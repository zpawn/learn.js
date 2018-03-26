import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../Utility';

const initState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

const addIngredient = (state, action) => {
    const addedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 },
        addedIngs = updateObject(state.ingredients, addedIng),
        addedState = {
            ingredients: addedIngs,
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        };

    return updateObject(state, addedState);
};

const removeIngredient = (state, action) => {
    let removedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 },
        removedIngs = updateObject(state.ingredients, removedIng),
        removedState = {
            ingredients: removedIngs,
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        };

    return updateObject(state, removedState);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });
};

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;
