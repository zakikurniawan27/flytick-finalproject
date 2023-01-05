import axios from "axios";
import { getAllScheduleReducer, getDetailScheduleReducer, getSearchScheduleReducer, getDetailsScheduleReducer, getViewEditReducer, delScheduleReducer } from "../Reducers/scheduleReducer";

export const getAllSchedule  = () => async(dispatch, getState) => {
  try {
    const {token} = getState().auth
    const {data}= await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/schedule`,{
          headers: {
              Authorization: `${token}`
          }
      })
      dispatch(getAllScheduleReducer(data))
  } catch (error) {
    alert(error.response.data.message)
  }
}

export const getDetailSchedule  = (id) => async(dispatch, getState) => {
  try {
    const {token} = getState().auth
    const {data}= await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/schedule/${id}`,{
          headers: {
              Authorization: `${token}`
          }
      })
      dispatch(getDetailScheduleReducer(data))
  } catch (error) {
    alert(error.response.data.message)
  }
}

export const getSearchSchedule = (departureTimeNew, fromAirport, toAirport, adult, child) => async(dispatch, getState) => {
    try {
      if(!fromAirport || !toAirport || !departureTimeNew || !adult || !child) return
      const { token } = getState().auth
      const {data} = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/schedule?`,
        { 
          headers: {
            Authorization: `${token}`,
          },
          params: {
            departure_time: departureTimeNew,
            from_airport: fromAirport,
            to_airport: toAirport,
            adult: adult,
            child: child,
          },
        }
      );
      dispatch(getSearchScheduleReducer(data))
    } catch (err) {
      alert(err.response.data.message)
    }
}

export const getViewEdit = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/schedule/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getViewEditReducer(data))
        navigate(`/cschedules/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const delSchedule = (id) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/api/schedule/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(delScheduleReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getDetailsSchedule = (id, navigate) => async(dispatch, getState) => {
    try {
        if(!id)return
        const {token} = getState().auth
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/schedule/${id}`,{
                headers:{
                    Authorization: `${token}`
                }
            }
        )
        dispatch(getDetailsScheduleReducer(data))
        navigate(`/schedule/${id}`)
    } catch (error) {
        alert(error.response.data.message)
    }
}