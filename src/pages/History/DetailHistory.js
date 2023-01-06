import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetailTransaction } from '../../Redux/Actions/createTransactionAction'
import logoAirplane from "../../assets/logoAirplane.png"
import CardDetails from '../../components/card/History/CardDetails'


const DetailHistory = () => {

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {token, user} = useSelector((state) => state.auth)
    const {details} = useSelector((state) => state.transaction)

    useEffect(() => {
        dispatch(getDetailTransaction(params.id, token))
    },[dispatch, params.id, token])

    const dataMaskapai = [
        {
          nama: "TickAir",
          image: <img src={logoAirplane} alt="" id='logo-airplane'/>,
        },
    ];
    
    return (
    <>  
        <div className='container'>
            <p className='fw-bold fs-5 text-success-900 text-history'>TICKET</p>
            <div className='d-flex justify-content-center gap-3 row'>
                <CardDetails dataMaskapai={dataMaskapai} details={details} navigate={navigate}/>
            </div>
            <button className='btn' onClick={() => navigate(`/history/${user?.data?.id}`)}>
                back
            </button>
        </div>
    </>
  )
}

export default DetailHistory