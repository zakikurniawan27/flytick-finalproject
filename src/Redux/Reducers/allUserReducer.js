import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allUsers: []
}

const allUserSlicer = createSlice({
    name: "allUser",
    initialState,
    reducers: {
        getAllUserReducer: (state, action) => {
            state.allUsers = action.payload
        }
    }
})

export const {getAllUserReducer} = allUserSlicer.actions

export default allUserSlicer.reducer