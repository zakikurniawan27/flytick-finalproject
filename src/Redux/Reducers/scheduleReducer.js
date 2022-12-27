import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allSchedules: [],
    searchSchedules: [],
    detail: null
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
        }
    }
})

export const {getAllScheduleReducer, getSearchScheduleReducer, getDetailScheduleReducer} = searchScheduleSlicer.actions

export default searchScheduleSlicer.reducer