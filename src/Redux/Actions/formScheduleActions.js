import axios from "axios";
import { createScheduleReducer, editScheduleReducer } from "../Reducers/formScheduleReducer";

export const createSchedule = (data, token, navigate) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/schedule`,
            data
        )
        dispatch(createScheduleReducer(res))
        navigate('/schedule')
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

export const editSchedule = (id, data, token) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.put(
            `${process.env.REACT_APP_BASE_URL}/api/schedule/${id}`,
            data
        )
        dispatch(editScheduleReducer(res))
    } catch (error) {
        alert(error.response.data[0].message)
    }
}

