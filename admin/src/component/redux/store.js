import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./features/adminSlice"
export default  configureStore({
    reducer:{
        admin:adminSlice,
    }
})