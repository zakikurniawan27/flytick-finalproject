import axios from "axios";
import { getAllFlightReducer } from "../Reducers/flightReducer";

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