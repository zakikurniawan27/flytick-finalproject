import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    createUsers: [],
    editUsers: []
}

const createUsersSlicer = createSlice({
    name: "cUser",
    initialState,
    reducers:{
        createUsersReducer: (state, actions) =>{
            state.createUsers = actions.payload
        },
        editUsersReducer: (state, actions) =>{
            state.editUsers = actions.payload
        }
    }
})

export const {createUsersReducer, editUsersReducer} = createUsersSlicer.actions

export default createUsersSlicer.reducer