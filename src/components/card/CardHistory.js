import React from 'react'
import Moment from 'react-moment'

const CardHistory = (props) => {
    const {history} = props

    const formatRupiah = (angka) => {
        const rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `Rp ${rupiah}`;
    };
    return (
    <>  
        <p className='fw-bold fs-5 text-success-900'>
            HISTORY
        </p>
        {history.length === 0 ? (
            <p className='text-center fs-4 fw-bold'>
                NO HISTORY
            </p>
        ): (
            history.map((item) => (
                <>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-3'>
                                    <p className='fw-semibold '>Transaction Succes</p>
                                </div>
                                <div className='col-3'>
                                    <p>at <Moment format='DD/MM/YYYY hh:mm a'>{item.transaction_time}</Moment></p>
                                </div>
                                <div className='col-3 text-end'>
                                    <p className=' fw-semibold price'>{formatRupiah(`${item.total_cost}`)}</p>
                                </div>
                                <div className='col-3 text-end'>
                                    <button className='btn bttn'>
                                        Detail
                                    </button>
                                </div>
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