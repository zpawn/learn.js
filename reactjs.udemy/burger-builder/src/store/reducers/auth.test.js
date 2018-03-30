import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('Auth reducer', () => {
    it('Should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: null,
            redirectPath: '/'
        });
    });

    it('Should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: null,
            redirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            redirectPath: '/'
        });
    });
});
