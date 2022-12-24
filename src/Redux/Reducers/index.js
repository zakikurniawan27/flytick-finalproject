import { combineReducers } from "@reduxjs/toolkit";
import allAirportReducer from "./allAirportReducer";
import authReducer from "./authReducer";
import allCountry from "./countryReducer";
import allCity from "./cityReducer";
import createTransaction from "./createTransactionReducer"
import searchScheduleReducer from "./scheduleReducer";

export default combineReducers({
    auth: authReducer,
    allAirport: allAirportReducer,
    transaction: createTransaction,
    country: allCountry,
    city: allCity,
    searchSchedule: searchScheduleReducer
})