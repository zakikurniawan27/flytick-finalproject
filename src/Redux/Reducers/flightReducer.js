import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    flights: [],
}

const flightSlicer = createSlice({
    name: "allData",
    initialState,
    reducers: {
        getAllFlightReducer: (state, action) => {
            state.flights = action.payload
        },
    }
})

export const {getAllFlightReducer} = flightSlicer.actions

export default flightSlicer.reducer