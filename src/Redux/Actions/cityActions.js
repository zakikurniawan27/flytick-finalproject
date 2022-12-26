import axios from "axios";
import { getAllCityReducer } from "../Reducers/cityReducer";

export const getAllcity = () => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/city`,{
                headers:{
                    Authorization: token
                }
            }
        )
        dispatch(getAllCityReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}