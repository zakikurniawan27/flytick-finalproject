import axios from "axios";
import { createCityReducer, editCityReducer } from "../Reducers/formCityReducer"

export const createCity = (data, token, navigate) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/city`,
            data
        )
        dispatch(createCityReducer(res))
        navigate('/city')
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

export const editCity = (id, data, token) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.put(
            `${process.env.REACT_APP_BASE_URL}/api/city/${id}`,
            data
        )
        dispatch(editCityReducer(res))
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

