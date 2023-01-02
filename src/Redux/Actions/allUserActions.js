import axios from "axios";
import { getAllUserReducer, getDetailUserReducer, getViewEditReducer, delUserReducer } from "../Reducers/allUserReducer"; 

export const getAllUser = () => async(dispatch, getState) => {
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/user`, {
                headers: {
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getAllUserReducer(data))
    } catch (error) {
        console.log(error)
    }
}

export const getDetailUser = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/user/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getDetailUserReducer(data))
        navigate(`/users/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getViewEdit = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/user/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getViewEditReducer(data))
        navigate(`/cuser/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const delUser = (id) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/api/user/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(delUserReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}