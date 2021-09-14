import { useReducer } from "react";

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_CART_QUANTITY,
  TOGGLE_CART,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of 'UPDATE_PRODUCTS', return a new state opject with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, ...action.products],
      };
    case REMOVE_FROM_CART:
      let newCart = [
        ...state.cart.filter((product) => product._id !== action._id),
      ];
      return {
        ...state,
        cart: newCart,
        cartOpen: newCart.length > 0,
      };
    case UPDATE_CART_QUANTITY:
      const newCart2 = [
        ...state.cart.map((product) =>
          product._id === action._id
            ? { ...product, purchaseQuantity: action.purchaseQuantity }
            : product
        ),
      ];
      return {
        ...state,
        cartOpen: true,
        cart: newCart2,
      };
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };
    case TOGGLE_CART:
      console.log("Changing cartOpen from " + state.cartOpen);
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
