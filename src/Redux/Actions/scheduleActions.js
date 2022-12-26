import axios from "axios";
import { getDetailScheduleReducer, getSearchScheduleReducer } from "../Reducers/scheduleReducer";


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