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
                            </div>
                            <div className='row mt-3'>
                                <div className='col fs-5 fw-semibold text-success-900'>
                                    {item.tickets.map((i) => i.type === "Adult").length >= 1 && item.tickets.map((i) => i.schedule.flight.code)[0]}
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col fw-semibold'>
                                    {item.invoice_number}
                                </div>
                                <div className='col text-end'>
                                    <p><Moment format='DD/MM/YYYY hh:mm a'>{item.transaction_time}</Moment></p>
                                </div>
                            </div>
                            <div className='row text-center mt-4'>
                                <div className='col'>
                                    {item.tickets.map((i) => i.type === "Adult").length >= 1 && item.tickets.map((i) => i.schedule.fromAirport.name)[0]}
                                </div>
                                <div className='col-1'>
                                    <p className='fs-4 iconFillArrow'>
                                        <BsFillArrowRightCircleFill />
                                    </p>
                                </div>
                                <div className='col'>
                                    {item.tickets.map((i) => i.type === "Adult").length >= 1 && item.tickets.map((i) => i.schedule.toAirport.name)[0]}
                                </div>
                            </div>
                            <div className='row text-center'>
                                <div className='col'>
                                    {item.tickets.map((i) => i.type === "Adult").length >= 1 && item.tickets.map((i) => i.schedule.fromAirport.code)[0]}
                                </div>
                                <div className='col'>
                                    {item.tickets.map((i) => i.type === "Adult").length >= 1 && item.tickets.map((i) => i.schedule.toAirport.code)[0]}
                                </div>
                            </div>
                            <div className='row text-center'>
                                <div className='col'>
                                    <p>
                                        <Moment format='YYYY/MM/DD hh:mm a'>{item.tickets.map((i) => i.type === "Adult").length >= 1 && item.tickets.map((i) => i.schedule.departure_time)[0]}</Moment>
                                    </p>
                                </div>
                                <div className='col'>
                                    <p>
                                        <Moment format='YYYY/MM/DD hh:mm a'>{item.tickets.map((i) => i.type === "Adult").length >= 1 && item.tickets.map((i) => i.schedule.arrival_time)[0]}</Moment>
                                    </p>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col'>
                                    {item.round_trip === false && <p>One Way</p>}
                                    {item.round_trip === true && <p>Round Trip</p>}
                                </div>
                                <div className='col text-end'>
                                    <p>
                                        {item.adult} Adult  <span className='ms-1'>{item.child} Child</span>
                                    </p>
                                </div>
                            </div>
                            <div className='row text-end'>
                                <p>{formatRupiah(item.total_cost)}</p>
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