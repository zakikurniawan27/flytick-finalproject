import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allFlights: [],
    allCities: [],
    allCountries: [],
}

const allDataSlicer = createSlice({
    name: "allData",
    initialState,
    reducers: {
        getAllFlightReducer: (state, action) => {
            state.allFlights = action.payload
        },
        getAllCityReducer: (state, action) => {
            state.allCities = action.payload
        },
        getAllCountryReducer: (state, action) => {
            state.allCountries = action.payload
        }
    }
})

export const {getAllFlightReducer, getAllCityReducer, getAllCountryReducer} = allDataSlicer.actions

export default allDataSlicer.reducer