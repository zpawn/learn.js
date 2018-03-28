import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCgIU42GxAgtBuxZd606_tJNa-qLwh8iew';

        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCgIU42GxAgtBuxZd606_tJNa-qLwh8iew';
        }

        const data = {
                email: email,
                password: password,
                returnSecureToken: true
            };

        axios.post(url, data)
            .then(res => {
                dispatch(authSuccess(res.data.idToken, res.data.localId));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            })
    }
};
