import axios from "axios";
import FormData from 'form-data';
import { createUsersReducer, editUsersReducer } from "../Reducers/formUserReducer";

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

export const editUser = (id, dataForm, token) => async(dispatch) =>{
    try {
        const data = new FormData();
        data.append('name', dataForm.name);
        data.append('balance', dataForm.balance);
        data.append('image', dataForm.image);
        data.append('nik', dataForm.nik);
        data.append('birth_place', dataForm.birth_place);
        data.append('birth_date', dataForm.birth_date);
        data.append('telp', dataForm.telp);
        data.append('nationality', dataForm.nationality);
        data.append('no_passport', dataForm.no_passport);
        data.append('issue_date', dataForm.issue_date);
        data.append('expire_date', dataForm.expire_date);

        const config = {
            method: 'put',
            url: `${process.env.REACT_APP_BASE_URL}/api/user/${id}`,
            headers: { 
                'Authorization': token
            },
            data : data
        };
        
        const response = await axios(config)
        dispatch(editUsersReducer(response.data))
    } catch (error) {
        alert(error.response.data[0].message)
    }
}