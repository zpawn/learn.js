import nanoid from 'nanoid';

import * as actionTypes from './actions';

const initState = {
    persons: []
};

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: nanoid(),
                name: action.person.name,
                age: action.person.age
            };

            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        case actionTypes.DELETE_PERSON:
            const updatedPersons = state.persons.filter(person => person.id !== action.personId);
            return {
                ...state,
                persons: updatedPersons
            };
        default:
            return state;
    }
};

export default reducer;
