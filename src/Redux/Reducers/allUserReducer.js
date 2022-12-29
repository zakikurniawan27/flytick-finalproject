import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allUsers: [],
    details: null
}

const allUserSlicer = createSlice({
    name: "allUser",
    initialState,
    reducers: {
        getAllUserReducer: (state, action) => {
            state.allUsers = action.payload
        },
        getDetailUserReducer: (state, action) => {
            state.details = action.payload
        },
    }
})

export const {getAllUserReducer, getDetailUserReducer} = allUserSlicer.actions

export default allUserSlicer.reducer