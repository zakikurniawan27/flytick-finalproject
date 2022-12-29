import axios from "axios";
import { createTransactionReducer, getAllTransactionsReducer, getDetailTransactionReducer} from "../Reducers/createTransactionReducer";


export const getAllTransaction = (token,no) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token;
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/transaction`,{
                params:{
                    page: no
                }
            }
        )
        dispatch(getAllTransactionsReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getDetailTransaction = (id, token) => async(dispatch) =>{
    try {
        axios.defaults.headers['Authorization'] = token
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/transaction/${id}`
        )
        dispatch(getDetailTransactionReducer(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

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