import {
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
} from "../../utils/actions";

const initialState = {
  items: [],
  open: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        items: [...action.payload],
      };
    case ADD_TO_CART:
      return {
        open: true,
        items: [...state.items, action.payload],
      };
      case CLEAR_CART:
        return {
          open:false,
          items: []
        };
    case REMOVE_FROM_CART:
      let newCart = [
        ...state.items.filter((product) => product._id !== action.payload),
      ];
      return {
        items: newCart,
        open: newCart.length > 0,
      };
    case TOGGLE_CART:
      return {
        ...state,
        open: !state.open,
      };
    case UPDATE_CART_QUANTITY:
      const newCart2 = [
        ...state.items.map((product) =>
          product._id === action.payload.id
            ? { ...product, purchaseQuantity: action.payload.purchaseQuantity }
            : product
        ),
      ];
      return {
        open: true,
        items: newCart2,
      };
    default:
      return state;
  }
}
