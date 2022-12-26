import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchSchedules: [],
    detail: null
}

const searchScheduleSlicer = createSlice({
    name: "searchSchedule",
    initialState,
    reducers: {
        getDetailScheduleReducer: (state, action) =>{
            state.detail = action.payload
        },
        getSearchScheduleReducer: (state, action) => {
            state.searchSchedules = action.payload
        }
    }
})

export const {getSearchScheduleReducer, getDetailScheduleReducer} = searchScheduleSlicer.actions

export default searchScheduleSlicer.reducer