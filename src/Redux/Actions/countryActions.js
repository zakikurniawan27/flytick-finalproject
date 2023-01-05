import axios from "axios";
import { getAllCountryReducer, getDetailCountryReducer, getViewEditReducer, delCountryReducer } from "../Reducers/countryReducer";

export const getAllCountry = () => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/country`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getAllCountryReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getDetailCountry = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/country/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getDetailCountryReducer(data))
        navigate(`/country/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getViewEdit = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/country/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getViewEditReducer(data))
        navigate(`/ccountry/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const delCountry = (id) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/api/country/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(delCountryReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}