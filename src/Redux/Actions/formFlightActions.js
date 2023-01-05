import axios from "axios";
import { createFlightReducer, editFlightReducer } from "../Reducers/formFlightReducer"

export const createFlight = (data, token, navigate) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/flight`,
            data
        )
        dispatch(createFlightReducer(res))
        navigate('/flight')
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

export const editFlight = (id, data, token) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.put(
            `${process.env.REACT_APP_BASE_URL}/api/flight/${id}`,
            data
        )
        dispatch(editFlightReducer(res))
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

