import React from 'react'
import Moment from 'react-moment';
import logoAirplane from "../../../assets/logoAirplane.png"
import TableDetailTicket from '../../TableDetailTicket';

const CardDetailTicket = (props) => {
    
    const {detailTickets} = props
    
    const dataMaskapai = [
        {
          nama: "TickAir",
          image: <img src={logoAirplane} alt="" id='logo-airplane'/>,
        },
    ];

    const formatRupiah = (angka) => {
        const rupiah = angka?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `Rp ${rupiah}`;
    };
    
    return (
    <>
        <div className='card card-detail-ticket'>
            <div className='card-body'>
                <h4 className='text-success-600 fw-bold text-center'>TICKET</h4>
                <div className='row'>
                    {dataMaskapai.map((item) => (
                        <>
                            <div className='col'>
                                {item.image}
                            </div>
                            <div className='col text-end'>
                                {item.nama}
                            </div>
                        </> 
                    ))}
                </div>
                <div className='row mt-1'>
                    <div className='col text-end text-detail-ticket'>
                        {detailTickets?.data.ticketData.ticket_number}
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-6 text-detail-ticket'>
                        <p className='fw-semibold'>Order Detail</p>
                        <p>Payment Date : <Moment>{detailTickets?.data.transactionData.paid_time}</Moment></p>
                        <p>Invoice Number : {detailTickets?.data.transactionData.invoice_number}</p>
                        <p>Total Payment : {formatRupiah(detailTickets?.data.scheduleData.cost)}</p>
                    </div>
                    <div className='col text-detail-ticket'>
                        <p className='fw-semibold'>Buyer Detail</p>
                        <p>Name : {detailTickets?.data.userData.name}</p>
                        <p>Email : {detailTickets?.data.userData.email}</p>
                    </div>
                </div>
                <div className='mt-3'>
                    <TableDetailTicket detailTickets={detailTickets}/>
                </div>
                <div className='mt-5'>
                    <img src={detailTickets?.data.ticketData.qr_code} alt='qr-code' id='qr-code'/>
                </div>
                <div className='mt-3 text-center'>
                    <a href={detailTickets?.data.ticketData.ticket_pdf}>
                        <button className='btn'>
                            Download Pdf
                        </button>    
                    </a>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default CardDetailTicket