import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailTicket } from '../../Redux/Actions/ticketActions'
import CardDetailTicket from '../../components/card/History/CardDetailTicket'

const DetaiTicketHistory = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const {token} = useSelector((state) => state.auth)
    const {details} = useSelector((state) => state.transaction)
    const {detailTickets} = useSelector((state) => state.ticket)

    useEffect(() => {
        dispatch(getDetailTicket(params.id, token))
    },[dispatch, params, token])

    return (
    <>
        <div className='container-xl'>
            <div className='d-flex justify-content-center'>
                <CardDetailTicket detailTickets={detailTickets}/>
            </div>
            <button className='btn' onClick={() => navigate(`/history/detail/${details?.data.id}`)}>
                back
            </button>
        </div>
    </>
  )
}

export default DetaiTicketHistory