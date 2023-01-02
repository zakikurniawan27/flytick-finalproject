import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allAirports: [],
    details: null,
    details2: null,
    details3: null,
    viewEdit: null,
    delAirport: null
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
        },
        getDetailsAirportReducer: (state, action) => {
            state.details3 = action.payload
        },
        getViewEditReducer: (state, action) => {
            state.viewEdit = action.payload
        },
        delAirportReducer: (state, action) => {
            state.delAirport = action.payload
        },
    }
})

export const {getAllAirportReducer, getDetailAirportReducer, getDetailAirport2Reducer, getDetailsAirportReducer, getViewEditReducer, delAirportReducer} = allAirportSlicer.actions

export default allAirportSlicer.reducer