import axios from "axios";
import { getAllUserReducer, getDetailUserReducer } from "../Reducers/allUserReducer"; 

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
        navigate("/users/:id")
    } catch (error) {
        alert(error.response.data.message)
    }
}