import axios from "axios";
import { createAirportsReducer, editAirportsReducer } from "../Reducers/formAirportReducer";

export const createAirports = (data, token, navigate) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/airport`,
            data
        )
        dispatch(createAirportsReducer(res))
        navigate('/airports')
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

export const editAirports = (id, data, token) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.put(
            `${process.env.REACT_APP_BASE_URL}/api/airport/${id}`,
            data
        )
        dispatch(editAirportsReducer(res))
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

