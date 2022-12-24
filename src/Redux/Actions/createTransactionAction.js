import axios from "axios";
import { createTransactionReducer } from "../Reducers/createTransactionReducer";

export const createTransaction = (data, token, navigate) => async(dispatch) =>{
    try {
        
        const {res} = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/transaction`,data,{
                headers:{
                    Authorization: token,
                    'Content-Type': 'application/json'
                }
            }
        )
        dispatch(createTransactionReducer(res))
        navigate('/transactionSuccess')
    } catch (error) {
        alert(error.response.data.message)
    }
}