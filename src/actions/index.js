import {auth_user, AUTH_USER} from './types';

export const signup = ({ email, password }) => dispatch => {
    dispatch({
        type: AUTH_USER,
        payload: 'asdad'
    })
};