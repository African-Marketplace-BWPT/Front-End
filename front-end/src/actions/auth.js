import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    //GET_USER,
    //AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_USER,
    LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const register = ({username, password}) => async (dispatch) => {
    console.log(username)
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({username, password});

try{
    const res = await axios.post(
        `https://murmuring-beyond-11554.herokuapp.com/api/v1/users/register`,
        body,
        config
        );
    console.log('Register Response:',res);
    dispatch({
        type:  REGISTER_SUCCESS,
        payload: res.data.user
    });
    } catch(err) {
        dispatch({
            type: REGISTER_FAIL
        });
    }
};

export const login = (username, password) => async (dispatch) => {
    console.log('formState from actions', username)
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({username, password});
    
    try {
        const res = await axios.post(
            `https://murmuring-beyond-11554.herokuapp.com/api/v1/users/login`,
            body,
            config
        );
        console.log('Login Response:', res);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const setUserData = (user) => async (dispatch) => {
    console.log("SET USER", user);
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  
    console.log("SET USER", user);
  
    dispatch({
      type: SET_USER,
      payload: user,
    });
  };
  

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};





// export const getUser= () => async (dispatch) => {
//     if (localStorage.token) {
//         setAuthToken(localStorage.token);
//     }
//     try{
//         const res = await axios.get(
//             `https://murmuring-beyond-11554.herokuapp.com/api/v1/users`
//         );
//         dispatch({
//             type: GET_USER,
//             payload: res.data,
//         });
//     } catch(err) {
//         dispatch({
//             type: AUTH_ERROR
//         });
//     }
// };