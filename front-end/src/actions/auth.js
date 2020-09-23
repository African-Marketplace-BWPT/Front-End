import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    //GET_USER,
    //AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';


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
        config);
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

    const config = {
        headers: {
            'Content_Type': 'application/json'
        },
    };

    const body = JSON.stringify({username, password});
    
    try {
        await axios.post(
            `https://murmuring-beyond-11554.herokuapp.com/api/v1/users/login`,
            body,
            config
        )
        .then(res =>{
          
            console.log('Login Response:', res)
        })
        
        
        // dispatch({
        //     type: LOGIN_SUCCESS,
        //     payload: res.data
        // });
    } .catch(err) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};

//import setAuthToken from '../utils/setAuthToken';

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