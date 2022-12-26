import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    transactions: []
}

const createTransactionSlicer = createSlice({
    name: "transaction",
    initialState,
    reducers:{
        createTransactionReducer: (state, actions) =>{
            state.transactions = actions.payload
        }
    }
})

export const {createTransactionReducer} = createTransactionSlicer.actions

export default createTransactionSlicer.reducer