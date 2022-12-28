import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    createUsers: []
}

const createUsersSlicer = createSlice({
    name: "cUser",
    initialState,
    reducers:{
        createUsersReducer: (state, actions) =>{
            state.createUsers = actions.payload
        }
    }
})

export const {createUsersReducer} = createUsersSlicer.actions

export default createUsersSlicer.reducer