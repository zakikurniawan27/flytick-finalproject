import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Moment from 'react-moment'
import { useNavigate } from 'react-router-dom';


const CardHistory = (props) => {

    const { transactions, formatRupiah } = props
    const navigate = useNavigate()
    
    
    return (
    <>  
        <p className='fw-bold fs-5 text-success-900'>
            HISTORY
        </p>
        {transactions.length === 0  ? (
            <p className='text-center fs-4 fw-bold'>
                NO HISTORY
            </p>
        ): transactions.data === 0 ? ( 
            <p className=' text-center fs-4 fw-bold'>
                KOSONG
            </p>
        ): (
            transactions?.data?.map((item) => (
                <>
                    <div className='card card-history'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col'>
                                    <p className='fw-semibold '>Transaction Succes</p>
                                </div>
                                <div className='col text-end'>
                                    <p>at <Moment format='DD/MM/YYYY hh:mm a'>{item.transaction_time}</Moment></p>
                                </div>
                            </div>
                            <div className='row text-center mt-4'>
                                <div className='col'>
                                    {item.tickets.map((i) => i.type === "Adult").length >= 1 && item.tickets.filter(index => index.type === "Children").map((i) => i.schedule.fromAirport.name)}
                                    {item.tickets.map((i) => i.type === "Adult").length === 1 && item.tickets.filter(index => index.type === "Adult").map((i) => i.schedule.fromAirport.name)}
                                    {item.tickets.map((i) => i.type === "Children").length > 1 && item.tickets.map((i) => i.type === "Adult").length === 1 && item.tickets.filter(index => index.type === "Adult").map((i) => i.schedule.fromAirport.name)}
                                </div>
                                <div className='col-1'>
                                    <p className='fs-4 iconFillArrow'>
                                        <BsFillArrowRightCircleFill />
                                    </p>
                                </div>
                                <div className='col'>
                                    {item.tickets.map((i) => i.type === "Adult").length >= 1 && item.tickets.filter(index => index.type === "Children").map((i) => i.schedule.toAirport.name)}
                                    {item.tickets.map((i) => i.type === "Adult").length === 1 && item.tickets.filter(index => index.type === "Adult").map((i) => i.schedule.toAirport.name)}
                                    {item.tickets.map((i) => i.type === "Children").length > 1 && item.tickets.map((i) => i.type === "Adult").length === 1 && item.tickets.filter(index => index.type === "Adult").map((i) => i.schedule.toAirport.name)}
                                </div>
                            </div>
                            <div className='row mt-4 text-center'>
                                <p className='fs-5 price text-success-900 fw-semibold'>{formatRupiah(item.total_cost)}</p>
                            </div>
                            <div className='text-center mt-3'>
                                <button className='btn bttn' onClick={() => navigate(`/history/detail/${item.id}`)}>
                                    Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ))
        )}
    </>
  )
}

export default CardHistory