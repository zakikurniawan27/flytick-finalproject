import axios from "axios";
import { getAllFlightReducer, getDetailFlightReducer, getViewEditReducer, delFlightReducer } from "../Reducers/flightReducer";

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

export const getDetailFlight = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/flight/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getDetailFlightReducer(data))
        navigate(`/flight/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getViewEdit = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/flight/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getViewEditReducer(data))
        navigate(`/cflight/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const delFlight = (id) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/api/flight/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(delFlightReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}