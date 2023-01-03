import axios from "axios";
import { setUser, setToken } from "../Reducers/authReducer";

export const login = (data, navigate) => async (dispatch) => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, data, {
        // headers: { "Access-Control-Allow-Origin": "*" },
      });
      if (result.data.data.token) {
        // Set token from backend to local storage
        // {"data": { "token": "ini token" }}
        localStorage.setItem("token", result.data.data.token);
        dispatch(setToken(result.data.data.token));

        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
export const me = (callback) => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
  
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/auth/whoami`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      dispatch(setUser(result.data));
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        dispatch(setToken(null));
        callback(error.response.status);
      }
    }
};

export const logout = (navigate) => async (dispatch) => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    navigate('/')
    dispatch(setUser(null));
}