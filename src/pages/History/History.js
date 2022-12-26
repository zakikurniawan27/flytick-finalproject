import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CardHistory from '../../components/card/CardHistory'

const History = () => {
    const navigate = useNavigate()
    const params = useParams()
    const intParam = parseInt(params.id)

    const {token} = useSelector((state) => state.auth)

    const [history, setHistory] = useState([])

    const getAllHistory = async() =>{
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/transaction`,{
                    headers:{
                        Authorization: `${token}`
                    }
                }
            )
            setHistory(res.data.data.filter((item) => item.user_id === intParam))
        } catch (error) {
            alert(error.response?.data.message)
        }
    }

    useEffect(() =>{
        getAllHistory()
    },[])
  return (
    <>
        <div className='container'>
            <div className='row gap-3 d-flex justify-content-center mb-5'>
                <CardHistory history={history}/>
            </div>
            <button className='btn' onClick={() => navigate('/')}>
                back
            </button>
        </div>
    </>
  )
}

export default History