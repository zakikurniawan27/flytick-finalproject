import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import centangHijau from '../../assets/centang-hijau.png'

const TransactionSucces = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setInterval(() => {
            navigate('/')
        },3000)
      }, [navigate]);
    return (
    <>
        <div className='container'>
            <div className='d-flex justify-content-center mb-5'>
                <div className='card'>
                    <div className='card-body transuc'>
                        <div className='d-flex justify-content-center'>
                            <img alt='centang' src={centangHijau} width="150" height="150"/>
                        </div>
                        <p className='text-center fw-bold fs-1 text-success '>Successfully</p>
                        <p className='text-center fw-semibold fs-3 mt-5'>Your Transaction is created please check your ticket later !</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TransactionSucces