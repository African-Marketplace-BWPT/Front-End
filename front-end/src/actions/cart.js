import {ADD_TO_CART, DELETE_FROM_CART} from './types';

export const addToCart = (listing) => async (dispatch) => {
    try{dispatch({
        type: ADD_TO_CART,
        payLoad: listing
    });
    } catch (err) {
        console.log(err);
    }
};

export const deleteListingFromCart = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_FROM_CART,
            payload: id
        });
    } catch (err) {
        console.log(err);
    }
    console.log("ListingID:", id);
};