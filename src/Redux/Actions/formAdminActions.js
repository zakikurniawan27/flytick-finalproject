import axios from "axios";
import FormData from 'form-data';
import { createUsersReducer } from "../Reducers/formAdminReducer";

export const createUser = (dataForm, token, navigate) => async(dispatch) =>{
    try {
        const data = new FormData();
        data.append('name', dataForm.name);
        data.append('email', dataForm.email);
        data.append('password', dataForm.password);
        data.append('role', dataForm.role);
        data.append('image', dataForm.image);

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}/api/user`,
            headers: { 
                'Authorization': token
            },
            data : data
        };
        
        const response = await axios(config)
        dispatch(createUsersReducer(response.data))
        navigate('/users')
    } catch (error) {
        alert(error.response.data[0].message)
    }
}