import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allAirports: [],
    details: null,
    details2: null
}

const allAirportSlicer = createSlice({
    name: "allAirport",
    initialState,
    reducers: {
        getAllAirportReducer: (state, action) => {
            state.allAirports = action.payload
        },
        getDetailAirportReducer: (state, action) => {
            state.details = action.payload
        },
        getDetailAirport2Reducer: (state, action) => {
            state.details2 = action.payload
        }
    }
})

export const {getAllAirportReducer, getDetailAirportReducer, getDetailAirport2Reducer} = allAirportSlicer.actions

export default allAirportSlicer.reducer