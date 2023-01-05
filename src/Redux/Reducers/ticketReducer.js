import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets: [],
    detailTickets: null
}

const ticketSlicer = createSlice({
    name: "ticket",
    initialState,
    reducers:{
        getAllTicketReducer : (state, actions) => {
            state.tickets = actions.payload
        },
        getDetailTicketReducer : (state, actions) => {
            state.detailTickets = actions.payload
        }
    }
})

export const {getAllTicketReducer, getDetailTicketReducer} = ticketSlicer.actions

export default ticketSlicer.reducer