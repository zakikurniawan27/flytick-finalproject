import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allSchedules: [],
    searchSchedules: [],
    detail: null,
    details3: null,
    viewEdit: null,
    delSchedule: null
}

const searchScheduleSlicer = createSlice({
    name: "searchSchedule",
    initialState,
    reducers: {
        getAllScheduleReducer: (state, action) => {
            state.allSchedules = action.payload
        },
        getDetailScheduleReducer: (state, action) =>{
            state.detail = action.payload
        },
        getSearchScheduleReducer: (state, action) => {
            state.searchSchedules = action.payload
        },
        getDetailsScheduleReducer: (state, action) => {
            state.details3 = action.payload
        },
        getViewEditReducer: (state, action) => {
            state.viewEdit = action.payload
        },
        delScheduleReducer: (state, action) => {
            state.delSchedule = action.payload
        },
    }
})

export const {getAllScheduleReducer, getSearchScheduleReducer, getDetailScheduleReducer, getDetailsScheduleReducer, getViewEditReducer, delScheduleReducer} = searchScheduleSlicer.actions

export default searchScheduleSlicer.reducer