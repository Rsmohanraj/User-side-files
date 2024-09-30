import { combineReducers, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

import productsReducer from './Slices/ProductsSlice';
import productReducer from './Slices/ProductSlice';
import authReducer from './Slices/authSlice';
import cartReducer from './Slices/CartSlice';
import orderReducer from './Slices/orderSlice';
import userReducer from './Slices/userSlice';

const reducer = combineReducers({
    productsState:productsReducer,
    productState: productReducer ,
    authState:authReducer,
    cartState: cartReducer,
    orderState: orderReducer,
    userState: userReducer
    
 })




 const store = configureStore({
    reducer,
    myMiddleware:[createAsyncThunk]
});

export default  store;
