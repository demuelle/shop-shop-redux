import {
    UPDATE_PRODUCTS
} from "../../utils/actions";

const initialState = []

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return [...action.payload];
        default:
            return state
    }
}