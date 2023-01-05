import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cities: [],
    details: null,
    viewEdit: null,
    delCity: null
}

const citySlicer = createSlice({
    name: "city",
    initialState,
    reducers: {
        getAllCityReducer: (state, actions) =>{
            state.cities = actions.payload
        },
        getDetailCityReducer: (state, action) => {
            state.details = action.payload
        },
        getViewEditReducer: (state, action) => {
            state.viewEdit = action.payload
        },
        delCityReducer: (state, action) => {
            state.delCity = action.payload
        },
    }
})

export const {getAllCityReducer, getDetailCityReducer, getViewEditReducer, delCityReducer} = citySlicer.actions

export default  citySlicer.reducer