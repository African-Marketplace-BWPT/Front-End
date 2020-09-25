import {
    GET_LISTING,
    ADD_LISTING,
    SET_LISTING,
    EDIT_LISTING,
    DELETE_LISTING
}   from '../actions/types';

const initialState = {
    users: null,
    editlisings: [],
    listings: [],
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_LISTING:
            return {
                ...state,
                listings: payload,
            };
        
        case ADD_LISTING:
                return{
                    ...state,
                    listings: payload.data
                }
        case EDIT_LISTING:
            return{
                ...state,
                editlisting: [],
                listings: [...state.listings, payload.data],
            };
        case DELETE_LISTING:
            return{
                ...state,
                listings: state.listings.filter((listing) => listing.id !== payload),
            };
        case SET_LISTING:
            return {
                ...state,
                editlisting: payload,
            };
        default:
            return state;
    }
}