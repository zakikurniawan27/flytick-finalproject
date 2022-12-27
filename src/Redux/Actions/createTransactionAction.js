import axios from "axios";
import { createTransactionReducer } from "../Reducers/createTransactionReducer";

export const createTransaction = (data, token, navigate) => async(dispatch) =>{
    try {
        axios.defaults.headers['Content-Type'] = "application/json";
        axios.defaults.headers['Authorization'] = token;
        const {res} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/transaction`,
            data
        )
        dispatch(createTransactionReducer(res))
        navigate('/transactionSuccess')
    } catch (error) {
        alert(error.response.data.message)
    }
}