import React from 'react'

function FormTransaction() {
  return (
    <>
        <div className='card '>
            <div className='card-body'>
                <p className='text-center fw-bold'>
                    Data Penumpang
                </p>
                <div className='row mt-5'>
                    <div className='col'>
                        <input type="email" className='form-control'placeholder='masukan email anda'/>
                    </div>
                    <div className='col'>
                        <input type="text" className='form-control'placeholder='masukan nama anda'/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col'>
                        <input type="number" className='form-control'placeholder='masukan NIK anda'/>
                    </div>
                    <div className='col'>
                        <input type="number" className='form-control'placeholder='masukan nomor telepon anda'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormTransaction