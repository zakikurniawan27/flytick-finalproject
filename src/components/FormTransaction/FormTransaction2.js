import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllcity } from '../../Redux/Actions/cityActions'
import { getAllCountry } from '../../Redux/Actions/countryActions'

function FormTransaction2(props) {
    const {
        email2, 
        setEmail2, 
        nama2, 
        setNama2, 
        nik2, 
        setNik2, 
        telp2, 
        setTelp2,
        birthPlace2,
        setBirthPlace2,
        birthDate2,
        setBirthDate2,
        nationality2,
        setNationality2,
        passport2,
        setPassport2,
        issueDate2,
        setIssueDate2,
        expireDate2,
        setExpireDate2
    }= props

    const dispatch = useDispatch()
    const {countries} = useSelector((state) => state.country)
    const {cities} = useSelector((state) => state.city)


    useEffect(() => {
        dispatch(getAllCountry())
        dispatch(getAllcity())
    },[dispatch])
    
    
  return (
    <>
        <div className='card '>
            <div className='card-body'>
                <p className='text-center fw-bold'>
                    Data Penumpang 2
                </p>
                <div className='row mt-5'>
                    <div className='col'>
                        <label for="email" className='form-label'>
                            Email
                        </label>
                        <input 
                            id='email'
                            type="email" 
                            className='form-control'
                            placeholder='masukan email anda'
                            value={email2}
                            onChange={(e) => {
                                e.preventDefault()
                                setEmail2(e.target.value)
                            }}/>
                    </div>
                    <div className='col'>
                        <label for="nama" className='form-label'>
                            Nama Lengkap
                        </label>
                        <input
                            id='nama' 
                            type="text" 
                            className='form-control'
                            placeholder='masukan nama anda'
                            value={nama2}
                            onChange={(e) => {
                                e.preventDefault()
                                setNama2(e.target.value)
                            }}/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col'>
                        <label for="ni" className='form-label'>
                            NIK
                        </label>
                        <input 
                            id='nik'
                            type="number" 
                            className='form-control'
                            placeholder='masukan NIK anda'
                            value={nik2}
                            onChange={(e) => {
                                e.preventDefault()
                                setNik2(e.target.value)
                            }}/>
                    </div>
                    <div className='col'>
                        <label for="noTelp" className='form-label'>
                            Nomor Telepon
                        </label>
                        <input 
                            id='noTelp'
                            type="text" 
                            className='form-control'
                            placeholder='masukan nomor telepon anda'
                            value={telp2}
                            onChange={(e) => {
                                e.preventDefault()
                                setTelp2(e.target.value)
                            }}/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col'>
                    <label for="tempatLahir" className='form-label'>
                            Tempat lahir
                        </label>
                        <select 
                            className='form-control' 
                            id='tempatLahir'
                            value={birthPlace2}
                            onChange={(e) => {
                                e.preventDefault()
                                setBirthPlace2(e.target.value)
                            }}
                            >
                            <option value="">
                                Tempat lahir
                            </option>
                            {cities?.data?.map((item, index) => (
                                <option value={item.name} key={index}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col'>
                        <label for="tanggalLahir" className='form-label'>
                            Tanggal lahir
                        </label>
                        <input 
                            id='tanggalLahir'
                            type="date" 
                            className='form-control'
                            placeholder='masukan nomor telepon anda'
                            value={birthDate2}
                            onChange={(e) => {
                                e.preventDefault()
                                setBirthDate2(e.target.value)
                            }}
                            />
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col'>
                    <label for="nationality" className='form-label'>
                            Nationality
                        </label>
                        <select 
                            className='form-control' 
                            id='nationality'
                            value={nationality2}
                            onChange={(e) => {
                                e.preventDefault()
                                setNationality2(e.target.value)
                            }}
                            >
                            <option value="">
                                Your Nationality
                            </option>
                            {countries?.data?.map((item, index) => (
                                <option value={item.id} key={index}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='col'>
                        <label for="passport" className='form-label'>
                            Passport
                        </label>
                        <input 
                            id='passport'
                            type="text" 
                            className='form-control'
                            placeholder='masukan nomor passport anda'
                            value={passport2}
                            onChange={(e) => {
                                e.preventDefault()
                                setPassport2(e.target.value)
                            }}
                            />
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col'>
                    <label for="penerbitan" className='form-label'>
                            Tanggal Penerbitan
                        </label>
                        <input 
                            id='penerbitan'
                            type="date" 
                            className='form-control'
                            value={issueDate2}
                            onChange={(e) => {
                                e.preventDefault()
                                setIssueDate2(e.target.value)
                            }}
                            />
                    </div>
                    <div className='col'>
                        <label for="tanggalLahir" className='form-label'>
                            Tanggal berakhir
                        </label>
                        <input 
                            id='tanggalLahir'
                            type="date" 
                            className='form-control'
                            value={expireDate2}
                            onChange={(e) => {
                                e.preventDefault()
                                setExpireDate2(e.target.value)
                            }}
                            />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormTransaction2