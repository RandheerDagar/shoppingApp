import {CartSlice} from "./slices/CartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const Store=configureStore({
    reducer:{
        cart:CartSlice.reducer,
    },
})
