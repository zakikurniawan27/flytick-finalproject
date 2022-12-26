import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: []
}

const countrySlicer = createSlice({
    name: "country",
    initialState,
    reducers: {
        getAllCountryReducer: (state, action) =>{
            state.countries = action.payload
        }
    }
})

export const {getAllCountryReducer} = countrySlicer.actions

export default countrySlicer.reducer