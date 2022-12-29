import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    transactions: [],
    details: null,
}

const createTransactionSlicer = createSlice({
    name: "transaction",
    initialState,
    reducers:{
        getAllTransactionsReducer: (state, actions) => {
            state.transactions = actions.payload
        },
        getDetailTransactionReducer: (state, actions) =>{
            state.details = actions.payload
        },
        createTransactionReducer: (state, actions) =>{
            state.transactions = actions.payload
        }
    }
})

export const {getAllTransactionsReducer, getDetailTransactionReducer, createTransactionReducer} = createTransactionSlicer.actions

export default createTransactionSlicer.reducer