import axios from "axios";
import { getAllUserReducer } from "../Reducers/allUserReducer"; 

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