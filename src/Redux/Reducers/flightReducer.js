import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    flights: [],
    details: null,
    viewEdit: null,
    delFlight: null
}

const flightSlicer = createSlice({
    name: "allFlight",
    initialState,
    reducers: {
        getAllFlightReducer: (state, action) => {
            state.flights = action.payload
        },
        getDetailFlightReducer: (state, action) => {
            state.details = action.payload
        },
        getViewEditReducer: (state, action) => {
            state.viewEdit = action.payload
        },
        delFlightReducer: (state, action) => {
            state.delFlight = action.payload
        },
    }
})

export const {getAllFlightReducer, getDetailFlightReducer, getViewEditReducer, delFlightReducer} = flightSlicer.actions

export default flightSlicer.reducer