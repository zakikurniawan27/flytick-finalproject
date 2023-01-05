import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    createFlight: [],
    editFlight: []
}

const createFlightSlicer = createSlice({
    name: "cFlight",
    initialState,
    reducers:{
        createFlightReducer: (state, actions) =>{
            state.createFlight = actions.payload
        },
        editFlightReducer: (state, actions) =>{
            state.editFlight = actions.payload
        }
    }
})

export const {createFlightReducer,editFlightReducer} = createFlightSlicer.actions

export default createFlightSlicer.reducer