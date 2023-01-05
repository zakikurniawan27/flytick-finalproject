import React from 'react'
import Moment from 'react-moment'

const tableDetailTicket = (props) => {

    const {detailTickets} = props
    
    return (
    <>
        <div className='container-xl'>
            <div className='row'>
                <div className='col-8 border border-2 border-dark'>
                    <div className='row'>
                        <div className='col'>
                            <p>Flight No :</p>
                        </div>
                        <div className='col text-end'>
                            <p>{detailTickets?.data.flightData.code} | {detailTickets?.data.flightData.class}</p>
                        </div>
                    </div>
                </div>
                <div className='col-4 border border-2 border-dark'>
                    <div className='row'>
                        <div className='col'>
                            <p>Seat No :</p>
                        </div>
                        <div className='col'>
                            <p>{detailTickets?.data.ticketData.seat_number} | {detailTickets?.data.ticketData.type}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-5 border border-2 border-dark text-detail-ticket'>
                    <div className='row'>
                        <p className='fw-semibold text-center'>Passenger Data</p>
                        <div className='row mt-2'>
                            <div className='col'>
                                <p>Name :</p>
                            </div>
                            <div className='col text-end'>
                                <p>{detailTickets?.data.passengerData.name}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p>Nik :</p>
                            </div>
                            <div className='col text-end'>
                                {detailTickets?.data.passengerData.nik}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p>No Telp :</p>
                            </div>
                            <div className='col text-end'>
                                <p>{detailTickets?.data.passengerData.telp}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p>No Passport :</p>
                            </div>
                            <div className='col text-end'>
                                <p>{detailTickets?.data.passengerData.no_passport === null && <p>-</p>}</p>
                                <p>{detailTickets?.data.passengerData.no_passport} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-7 border border-2 border-dark text-detail-ticket'>
                    <div className='row'>
                        <p className='fw-semibold text-center'>Schedule Data</p>
                        <div className='row mt-1'>
                            <p className='fw-semibold'>Departure</p>
                            <p>{detailTickets?.data.fromAirportData.name} ({detailTickets?.data.fromAirportData.code})</p>
                            <p>[<Moment>{detailTickets?.data.scheduleData.departure_time}</Moment>]</p>
                        </div>
                        <div className='row mt-1'>
                            <p className='fw-semibold'>Arrival</p>
                            <p>{detailTickets?.data.toAirportData.name} ({detailTickets?.data.toAirportData.code})</p>
                            <p>[<Moment>{detailTickets?.data.scheduleData.arrival_time}</Moment>]</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default tableDetailTicket