import { combineReducers } from 'redux'

import categoriesReducer from './components/CategoryMenu/categorySlice'
import cartReducer from './components/Cart/cartSlice'
import productsReducer from './components/ProductList/productSlice'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer
})

export default rootReducer