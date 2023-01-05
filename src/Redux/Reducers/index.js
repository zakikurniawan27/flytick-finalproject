import { combineReducers } from "@reduxjs/toolkit";
import allAirportReducer from "./allAirportReducer";
import allUserReducer from "./allUserReducer";
import authReducer from "./authReducer";
import allCountry from "./countryReducer";
import allCity from "./cityReducer";
import allTransaction from "./createTransactionReducer";
import allTicket from "./ticketReducer";
import searchScheduleReducer from "./scheduleReducer";
import flightReducer from "./flightReducer";

export default combineReducers({
    auth: authReducer,
    allAirport: allAirportReducer,
    allUser: allUserReducer,
    allFlight: flightReducer,
    transaction: allTransaction,
    ticket: allTicket,
    country: allCountry,
    city: allCity,
    searchSchedule: searchScheduleReducer
})