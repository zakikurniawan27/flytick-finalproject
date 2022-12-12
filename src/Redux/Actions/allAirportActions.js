import axios from "axios";
import { getAllAirportReducer } from "../Reducers/allAirportReducer";



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