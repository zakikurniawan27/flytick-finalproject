import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    createAirports: [],
    editAirports: []
}

const createAirportsSlicer = createSlice({
    name: "cAirport",
    initialState,
    reducers:{
        createAirportsReducer: (state, actions) =>{
            state.createAirports = actions.payload
        },
        editAirportsReducer: (state, actions) =>{
            state.editAirports = actions.payload
        }
    }
})

export const {createAirportsReducer, editAirportsReducer} = createAirportsSlicer.actions

export default createAirportsSlicer.reducer