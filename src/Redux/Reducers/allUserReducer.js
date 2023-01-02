import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allUsers: [],
    details: null,
    viewEdit: null,
    delUser: null
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
        getViewEditReducer: (state, action) => {
            state.viewEdit = action.payload
        },
        delUserReducer: (state, action) => {
            state.delUser = action.payload
        },
    }
})

export const {getAllUserReducer, getDetailUserReducer, getViewEditReducer, delUserReducer} = allUserSlicer.actions

export default allUserSlicer.reducer