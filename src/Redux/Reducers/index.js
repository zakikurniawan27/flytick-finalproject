import { combineReducers } from "@reduxjs/toolkit";
import allAirportReducer from "./allAirportReducer";
import allUserReducer from "./allUserReducer";
import authReducer from "./authReducer";
import allCountry from "./countryReducer";
import allCity from "./cityReducer";
import createTransaction from "./createTransactionReducer"
import searchScheduleReducer from "./scheduleReducer";
import flightReducer from "./flightReducer";

export default combineReducers({
    auth: authReducer,
    allAirport: allAirportReducer,
    allUser: allUserReducer,
    allFlight: flightReducer,
    transaction: createTransaction,
    country: allCountry,
    city: allCity,
    searchSchedule: searchScheduleReducer
})