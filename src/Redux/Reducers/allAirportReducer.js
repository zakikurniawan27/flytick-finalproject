import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allAirports: []
}

const allAirportSlicer = createSlice({
    name: "allAirport",
    initialState,
    reducers: {
        getAllAirportReducer: (state, action) => {
            state.allAirports = action.payload
        }
    }
})

export const {getAllAirportReducer} = allAirportSlicer.actions

export default allAirportSlicer.reducer