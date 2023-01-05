import axios from "axios";
import { getAllTicketReducer, getDetailTicketReducer} from "../Reducers/ticketReducer";


export const getAllTicket = (token) => async(dispatch) =>{
    try { 
        axios.defaults.headers['Authorization'] = token
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/ticket`
        )
        dispatch(getAllTicketReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getDetailTicket = (id, token) => async(dispatch) =>{
    try {
        if(!id) return
        axios.defaults.headers['Authorization'] = token
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/ticket/${id}`
        )
        dispatch(getDetailTicketReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}
