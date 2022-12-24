import { combineReducers } from "@reduxjs/toolkit";
import allAirportReducer from "./allAirportReducer";
import allUserReducer from "./allUserReducer";
import authReducer from "./authReducer";
import allCountry from "./countryReducer";
import allCity from "./cityReducer";
import createTransaction from "./createTransactionReducer"
import searchScheduleReducer from "./scheduleReducer";
import allDataReducer from "./allDataReducer";

export default combineReducers({
    auth: authReducer,
    allAirport: allAirportReducer,
    allUser: allUserReducer,
    allData: allDataReducer,
    transaction: createTransaction,
    country: allCountry,
    city: allCity,
    searchSchedule: searchScheduleReducer
})