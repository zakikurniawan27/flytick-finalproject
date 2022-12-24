import axios from "axios";
import { getAllCountryReducer } from "../Reducers/countryReducer";

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