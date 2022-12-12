import { combineReducers } from "@reduxjs/toolkit";
import allAirportReducer from "./allAirportReducer";

export default combineReducers({
    allAirport: allAirportReducer
})