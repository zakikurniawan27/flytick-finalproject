import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    details: null,
    viewEdit: null,
    delCountry: null
}

const countrySlicer = createSlice({
    name: "country",
    initialState,
    reducers: {
        getAllCountryReducer: (state, action) =>{
            state.countries = action.payload
        },
        getDetailCountryReducer: (state, action) => {
            state.details = action.payload
        },
        getViewEditReducer: (state, action) => {
            state.viewEdit = action.payload
        },
        delCountryReducer: (state, action) => {
            state.delCountry = action.payload
        },
    }
})

export const {getAllCountryReducer, getDetailCountryReducer, getViewEditReducer, delCountryReducer} = countrySlicer.actions

export default countrySlicer.reducer