import { combineReducers } from "@reduxjs/toolkit";
import allAirportReducer from "./allAirportReducer";
import allUserReducer from "./allUserReducer";
import authReducer from "./authReducer";
import searchScheduleReducer from "./scheduleReducer";
import allDataReducer from "./allDataReducer";

export default combineReducers({
    auth: authReducer,
    allAirport: allAirportReducer,
    allUser: allUserReducer,
    searchSchedule: searchScheduleReducer,
    allData: allDataReducer
})