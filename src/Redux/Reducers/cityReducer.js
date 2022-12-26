import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cities: []
}

const citySlicer = createSlice({
    name: "city",
    initialState,
    reducers: {
        getAllCityReducer: (state, actions) =>{
            state.cities = actions.payload
        }
    }
})

export const {getAllCityReducer} = citySlicer.actions

export default  citySlicer.reducer