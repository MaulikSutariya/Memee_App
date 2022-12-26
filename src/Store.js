import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./redux/AuthSlice";

const Store =configureStore({
    reducer:{
        user:AuthSlice
    }
})

export default Store