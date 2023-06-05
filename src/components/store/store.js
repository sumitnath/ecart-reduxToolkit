import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{
        cart:cartslice,
        products: productSlice
    }
});

export default store;
