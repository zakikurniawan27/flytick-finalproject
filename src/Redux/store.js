import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers"


const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development"
})

export default store