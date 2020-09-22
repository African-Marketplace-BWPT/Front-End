import { ADD_TO_CART, DELETE_FROM_CART} from '../actions/types';

const initialState = {
    cart: [],
    total: 0
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case ADD_TO_CART:
            console.log('adding to cart')
            return {
                ...state,
                cart: [...state.cart, payload],
                total: state.total += payload.price
            };
            case DELETE_FROM_CART:
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== payload),
                };
                default:
                    return state;
    }
}