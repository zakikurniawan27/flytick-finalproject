import axios from 'axios'
import iconArrow from '../../assets/arrow.png'
import logoAirplane from '../../assets/logoAirplane.png'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Moment from 'react-moment'
import FormTransaction from '../../components/FormTransaction'

const Transaction = (props) => {
    
    const { token, adult, child } = props
    const [detail, setDetail] = useState([])
    // const [detailFromAirport, setDetailFromAirport] = useState([])
    // const [detailToAirport, setDetailToAirport] = useState([])
    const dws = parseInt(adult)
    const ank = parseInt(child)
    console.log(dws, ank)
    const navigate = useNavigate()
    const params = useParams()

    const formatRupiah = (angka) =>{
        const rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `Rp ${rupiah}`
    }
    const cost = `${detail?.schedule?.cost}`
    const costRupiah = formatRupiah(cost)

    useEffect(() =>{
        // getDetailFromAirport()
        getDetailSchedule()
    },[])


    const getDetailSchedule = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/schedule/${params.id}`,{
                    headers: {
                        Authorization: `${token}`
                    }
                })
            setDetail(res?.data?.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    // const getDetailFromAirport = async () => { 
    //     try {
    //         const res = await axios.get(
    //             `${process.env.REACT_APP_BASE_URL}/api/airport/${detail?.schedule?.from_airport}`,{
    //                 headers:{
    //                     Authorization: `${token}`
    //                 }
    //             }
    //         )
    //         setDetailFromAirport(res.data)
    //     } catch (error) {
    //         alert(error.response?.data.message)
    //     }
    // }

    // const getDetailToAirport = async () => {
    //     try {
    //         const res = await axios.get(
    //             `${process.env.REACT_APP_BASE_URL}/api/airport/3`,{
    //                 headers:{
    //                     Authorization: `${token}`
    //                 }
    //             }
    //         )
    //         setDetailToAirport(res.data)
    //     } catch (error) {
    //         alert(error.response.data.message)
    //     }
    // }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-8'>
                {dws === 1 && ank === 0 &&
                    <>
                        <FormTransaction token={token}/>
                        <div className='d-flex justify-content-end mt-3'>
                            <button className='btn bttn'>PESAN</button>
                        </div>
                    </>
                }
                {dws === 2 && ank === 0 &&
                    <>
                        <FormTransaction token={token}/>
                        <div className='mt-5'>
                            <FormTransaction token={token}/>
                        </div>
                        <div className='d-flex justify-content-end mt-3'>
                            <button className='btn bttn'>PESAN</button>
                        </div>
                    </>
                }
                {dws === 1 && ank === 1 &&
                    <>
                        <FormTransaction token={token}/>
                        <div className='mt-5'>
                            <FormTransaction token={token}/>
                        </div>
                        <div className='d-flex justify-content-end mt-3'>
                            <button className='btn bttn'>PESAN</button>
                        </div>
                    </>
                }
                {dws === 3 && ank === 0 &&
                    <>
                        <FormTransaction token={token}/>
                        <div className='mt-5'>
                            <FormTransaction token={token}/>
                        </div>
                        <div className='mt-5'>
                            <FormTransaction token={token}/>
                        </div>
                        <div className='d-flex justify-content-end mt-3'>
                            <button className='btn bttn'>PESAN</button>
                        </div>
                    </>
                }
                {dws === 2 && ank === 1 &&
                    <>
                        <FormTransaction token={token}/>
                        <div className='mt-5'>
                            <FormTransaction token={token}/>
                        </div>
                        <div className='mt-5'>
                            <FormTransaction token={token}/>
                        </div>
                        <div className='d-flex justify-content-end mt-3'>
                            <button className='btn bttn'>PESAN</button>
                        </div>
                    </>
                }
                {dws === 1 && ank === 2 &&
                    <>
                        <FormTransaction token={token}/>
                        <div className='mt-5'>
                            <FormTransaction token={token}/>
                        </div>
                        <div className='mt-5'>
                            <FormTransaction token={token}/>
                        </div>
                        <div className='d-flex justify-content-end mt-3'>
                            <button className='btn bttn'>PESAN</button>
                        </div>
                    </>
                }
            </div>
            <div className='col-4'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-8'>
                                <p className='fw-bold'>Detail Jadwal</p>
                            </div>
                            <div className='col-4'>
                                <img src={logoAirplane} alt='logoAirplane' className='logoAirplane'/>
                            </div>
                        </div>
                        <p className='fw-bold'>{detail?.data?.flight.code}</p>
                        <div className='row ms-5'>
                            <div className='col'>
                                <p>{detail?.schedule?.from_airport}</p>
                                <p><Moment format='hh:mm a'>{detail?.schedule?.departure_time}</Moment></p>
                            </div>
                            <div className='col'>
                                <img src={iconArrow} alt='icon'/>
                            </div>
                            <div className='col'>
                                <p>{detail?.schedule?.to_airport}</p>
                                <p><Moment format='hh:mm a'>{detail?.schedule?.arrival_time}</Moment></p>
                            </div>
                        </div>
                        <p className='mt-5'><span className='fw-bold'>Price :</span> {costRupiah}</p>
                    </div>
                </div>
            </div>
        </div>
        <button className='btn' onClick={() => navigate('/')}>back</button>
    </div>
  )
}

export default Transaction