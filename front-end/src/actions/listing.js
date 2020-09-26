import axios from 'axios';

import {
    GET_LISTING,
    LISTING_ERROR,
    ADD_LISTING,
    SET_LISTING,
    EDIT_LISTING,
    DELETE_LISTING,
} from './types';

export const getListings = () => async (dispatch) => {
    try {
        const res = await axios.get(
            `https://murmuring-beyond-11554.herokuapp.com/api/v1/products`
        );
        dispatch({
            type: GET_LISTING,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: LISTING_ERROR,
            payload: {msg: err.response}
        });
    }
};

export const addListing = ( formData, history) => async ( dispatch) => {
    console.log('here in addListing', formData)
    try{
        const config = {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": localStorage.getItem('token'),
            },
        };

        const res = await axios.post(
            `https://murmuring-beyond-11554.herokuapp.com/api/v1/products`,
            formData,
            config
        );
        dispatch({
            type: ADD_LISTING,
            payload: res,
        });
        history.push('/myListing')
    } catch (err) {
        console.log(err);
    }
};

export const editListing = (formData, history) => async (dispatch) => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token'),
            },
        };
        console.log('here is form Data from action ', formData)
        const res = await axios.put(
            `https://murmuring-beyond-11554.herokuapp.com/api/v1/products/${formData.id}`,
            formData,
            config
        );

        dispatch({
            type:EDIT_LISTING,
            payload: res,
        });

        history.push('myListing')
    }   catch(err) {
        console.log(err);
    }
};

export const setListing = (id, history) => async (dispatch) => {
    try{
        const res = await axios.get(
            `https://murmuring-beyond-11554.herokuapp.com/api/v1/products/${id}`
        );

        dispatch({
            type: SET_LISTING,
            payload: res.data.item,
        }); 
        
        console.log('EditObject', res.data.item);

        history.push(`EditMyListing${id}`)
    }   catch(err) {
        dispatch({
            type: LISTING_ERROR,
            payload: {msg: err.response},
        });
    }
};

export const deleteListing = (id, history) => async (dispatch) => {
    console.log('itmeId:', id);
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            },
        };

        const res = await axios.delete(
            `https://murmuring-beyond-11554.herokuapp.com/api/v1/products/${id}`,
            config
        );

        console.log('delete respons:', res);
        
        dispatch({
            type: DELETE_LISTING,
            payload: id,
        });
    } catch (err) {
        dispatch({
            type: LISTING_ERROR,
            payload: {msg: err.response},
        });
    }
};