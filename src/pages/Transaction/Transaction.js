import iconArrow from '../../assets/arrow.png'
import logoAirplane from '../../assets/logoAirplane.png'
import React, { useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Moment from 'react-moment'
import FormTransaction from '../../components/FormTransaction'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailSchedule } from '../../Redux/Actions/scheduleActions'
import { getDetailAirport, getDetail2Airport } from '../../Redux/Actions/allAirportActions'

const Transaction = (props) => {
    
    const { token, adult, child } = props
    // const [detailFromAirport, setDetailFromAirport] = useState([])
    // const [detailToAirport, setDetailToAirport] = useState([])
    const dws = parseInt(adult)
    const ank = parseInt(child)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()

    const {searchSchedule} = useSelector((state) =>  state)
    const {allAirport} = useSelector((state) => state)

    const formatRupiah = (angka) =>{
        const rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `Rp ${rupiah}`
    }
    const cost = `${searchSchedule?.detail?.data?.schedule?.cost}`
    const costRupiah = formatRupiah(cost)

    

    useEffect(() =>{
        // getDetailFromAirport()
        dispatch(getDetailSchedule(params.id))
        dispatch(getDetailAirport(searchSchedule?.detail?.data?.schedule?.from_airport))
        dispatch(getDetail2Airport(searchSchedule?.detail?.data?.schedule?.to_airport))
    },[dispatch, params, searchSchedule?.detail?.data?.schedule?.from_airport, searchSchedule?.detail?.data?.schedule?.to_airport])

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
            <div className='col-6'>
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
            <div className='col-6'>
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
                        <p className='fw-bold'>{searchSchedule?.detail?.data?.flight?.code}</p>
                        <div className='row ms-5'>
                            <div className='col'>
                                <p>{allAirport?.details?.data?.name}</p>
                                <p><Moment format='hh:mm a'>{searchSchedule?.detail?.data?.schedule?.departure_time}</Moment></p>
                            </div>
                            <div className='col'>
                                <img src={iconArrow} alt='icon'/>
                            </div>
                            <div className='col'>
                                <p>{allAirport?.details2?.data?.name}</p>
                                <p><Moment format='hh:mm a'>{searchSchedule?.detail?.data?.schedule?.arrival_time}</Moment></p>
                            </div>
                        </div>
                        <p className='mt-5 text-success-900 fw-bold fs-3 price'> {costRupiah}</p>
                    </div>
                </div>
            </div>
        </div>
        <button className='btn' onClick={() => navigate('/')}>back</button>
    </div>
  )
}

export default Transaction