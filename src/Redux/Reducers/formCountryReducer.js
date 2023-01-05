import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    createCountry: [],
    editCountry: []
}

const createCountrySlicer = createSlice({
    name: "cCountry",
    initialState,
    reducers:{
        createCountryReducer: (state, actions) =>{
            state.createCountry = actions.payload
        },
        editCountryReducer: (state, actions) =>{
            state.editCountry = actions.payload
        }
    }
})

export const {createCountryReducer, editCountryReducer} = createCountrySlicer.actions

export default createCountrySlicer.reducer