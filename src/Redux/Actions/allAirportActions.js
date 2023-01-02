import axios from "axios";
import { getAllAirportReducer, getDetailAirportReducer, getDetailAirport2Reducer, getViewEditReducer, delAirportReducer, getDetailsAirportReducer } from "../Reducers/allAirportReducer";


export const getAllAirport = () => async(dispatch) => {
    try {
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/airport`
        )
        dispatch(getAllAirportReducer(data))
    } catch (error) {
        console.log(error)
    }
}

export const getDetailAirport = (id) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/airport/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getDetailAirportReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getDetail2Airport = (id) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/airport/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getDetailAirport2Reducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getViewEdit = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/airport/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getViewEditReducer(data))
        navigate(`/cairports/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const delAirport = (id) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/api/airport/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(delAirportReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getDetailsAirport = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/airport/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getDetailsAirportReducer(data))
        navigate(`/airports/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}