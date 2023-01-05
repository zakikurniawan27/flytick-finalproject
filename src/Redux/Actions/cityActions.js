import axios from "axios";
import { getAllCityReducer, getDetailCityReducer,getViewEditReducer,delCityReducer } from "../Reducers/cityReducer";

export const getAllcity = () => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/city`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getAllCityReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getDetailCity = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/city/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getDetailCityReducer(data))
        navigate(`/city/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getViewEdit = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/city/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getViewEditReducer(data))
        navigate(`/ccity/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const delCity = (id) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/api/city/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(delCityReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}