import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets: [],
    detailTickets: null,
    detailTickets2: null
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
        },
        getDetailTicket2Reducer : (state, actions) => {
            state.detailTickets2 = actions.payload
        }
    }
})

export const {getAllTicketReducer, getDetailTicketReducer, getDetailTicket2Reducer} = ticketSlicer.actions

export default ticketSlicer.reducer