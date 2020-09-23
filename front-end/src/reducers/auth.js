
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_USER,
    LOGOUT,
}   from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case GET_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('user', JSON.stringify(payload.user));
            
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case SET_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
              };
        
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                editlisting: [],
                listing: [],
                token: null,
                isAuthenticated: false,
                loading: false,
            };
            default:
                return state;
    }
}