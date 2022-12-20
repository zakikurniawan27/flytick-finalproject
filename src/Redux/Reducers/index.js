import { combineReducers } from "@reduxjs/toolkit";
import allAirportReducer from "./allAirportReducer";
import authReducer from "./authReducer";
import searchScheduleReducer from "./scheduleReducer";

export default combineReducers({
    auth: authReducer,
    allAirport: allAirportReducer,
    searchSchedule: searchScheduleReducer
})