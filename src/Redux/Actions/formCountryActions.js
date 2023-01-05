import axios from "axios";
import { createCountryReducer, editCountryReducer } from "../Reducers/formCountryReducer"

export const createCountry = (data, token, navigate) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/country`,
            data
        )
        dispatch(createCountryReducer(res))
        navigate('/country')
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

export const editCountry = (id, data, token) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.put(
            `${process.env.REACT_APP_BASE_URL}/api/country/${id}`,
            data
        )
        dispatch(editCountryReducer(res))
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

