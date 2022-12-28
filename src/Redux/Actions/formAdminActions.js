import axios from "axios";
import { createUsersReducer } from "../Reducers/formAdminReducer";

export const createUser = (data, token, navigate) => async(dispatch) =>{
    try {
        
        const {res} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/user`,data,{
                headers:{
                    Authorization: token,
                    'Content-Type': 'application/json'
                }
            }
        )
        dispatch(createUsersReducer(res))
        navigate('/users')
    } catch (error) {
        alert(error.response.data.message)
    }
}