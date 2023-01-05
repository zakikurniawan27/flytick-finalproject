import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    createCity: [],
    editCity: []
}

const createCitySlicer = createSlice({
    name: "cCity",
    initialState,
    reducers:{
        createCityReducer: (state, actions) =>{
            state.createCity = actions.payload
        },
        editCityReducer: (state, actions) =>{
            state.editCity = actions.payload
        }
    }
})

export const {createCityReducer, editCityReducer} = createCitySlicer.actions

export default createCitySlicer.reducer