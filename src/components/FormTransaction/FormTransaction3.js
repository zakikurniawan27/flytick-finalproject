import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllcity } from '../../Redux/Actions/cityActions'
import { getAllCountry } from '../../Redux/Actions/countryActions'

function FormTransaction3(props) {
    const {
        email3, 
        setEmail3, 
        nama3, 
        setNama3, 
        nik3, 
        setNik3, 
        telp3, 
        setTelp3,
        birthPlace3,
        setBirthPlace3,
        birthDate3,
        setBirthDate3,
        nationality3,
        setNationality3,
        passport3,
        setPassport3,
        issueDate3,
        setIssueDate3,
        expireDate3,
        setExpireDate3
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
                    Data Penumpang 3
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
                            value={email3}
                            onChange={(e) => {
                                e.preventDefault()
                                setEmail3(e.target.value)
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
                            value={nama3}
                            onChange={(e) => {
                                e.preventDefault()
                                setNama3(e.target.value)
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
                            value={nik3}
                            onChange={(e) => {
                                e.preventDefault()
                                setNik3(e.target.value)
                            }}/>
                    </div>
                    <div className='col'>
                        <label for="noTelp" className='form-label'>
                            Nomor Telepon
                        </label>
                        <input 
                            id='noTelp'
                            type="number" 
                            className='form-control'
                            placeholder='masukan nomor telepon anda'
                            value={telp3}
                            onChange={(e) => {
                                e.preventDefault()
                                setTelp3(e.target.value)
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
                            value={birthPlace3}
                            onChange={(e) => {
                                e.preventDefault()
                                setBirthPlace3(e.target.value)
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
                            value={birthDate3}
                            onChange={(e) => {
                                e.preventDefault()
                                setBirthDate3(e.target.value)
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
                            value={nationality3}
                            onChange={(e) => {
                                e.preventDefault()
                                setNationality3(e.target.value)
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
                            type="number" 
                            className='form-control'
                            placeholder='masukan nomor passport anda'
                            value={passport3}
                            onChange={(e) => {
                                e.preventDefault()
                                setPassport3(e.target.value)
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
                            value={issueDate3}
                            onChange={(e) => {
                                e.preventDefault()
                                setIssueDate3(e.target.value)
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
                            value={expireDate3}
                            onChange={(e) => {
                                e.preventDefault()
                                setExpireDate3(e.target.value)
                            }}
                            />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormTransaction3