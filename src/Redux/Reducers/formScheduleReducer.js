import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    createSchedules: [],
    editScheduless: []
}

const createScheduleSlicer = createSlice({
    name: "cSchedule",
    initialState,
    reducers:{
        createScheduleReducer: (state, actions) =>{
            state.createSchedules = actions.payload
        },
        editScheduleReducer: (state, actions) =>{
            state.editScheduless = actions.payload
        }
    }
})

export const {createScheduleReducer, editScheduleReducer} = createScheduleSlicer.actions

export default createScheduleSlicer.reducer