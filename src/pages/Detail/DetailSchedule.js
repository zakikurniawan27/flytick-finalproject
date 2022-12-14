import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DetailSchedule = (props) => {
    
    const { token } = props

    const navigate = useNavigate()
    const params = useParams()
    const [detail, setDetail] = useState([])

    const getDetailSchedule = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/schedule/${params.id}`,{
                    headers: {
                        Authorization: `${token}`
                    }
                })
            setDetail(res?.data)
        } catch (error) {
            alert(error.response.data.message)
        } 
    }
    useEffect(() => {
        getDetailSchedule()
    },[])
  return (
    <div>
        <button className='btn' onClick={() => navigate('/')}>back</button>
    </div>
  )
}

export default DetailSchedule