import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice.js";
import authReducer from "./slices/authSlice.js";

const reducer = combineReducers({
  productsState: productsReducer,
  productState: productReducer,
  authState: authReducer,
});

const store = configureStore({
  reducer,
});

export default store;
