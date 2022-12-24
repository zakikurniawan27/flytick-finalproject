import axios from "axios";
import { getAllFlightReducer, getAllCityReducer, getAllCountryReducer } from "../Reducers/allDataReducer";

export const getAllFlight = () => async(dispatch, getState) => {
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/flight`, {
                headers: {
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getAllFlightReducer(data))
    } catch (error) {
        console.log(error)
    }
}

export const getAllCity = () => async(dispatch, getState) => {
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/city`, {
                headers: {
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getAllCityReducer(data))
    } catch (error) {
        console.log(error)
    }
}

export const getAllCountry = () => async(dispatch, getState) => {
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/country`, {
                headers: {
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getAllCountryReducer(data))
    } catch (error) {
        console.log(error)
    }
}