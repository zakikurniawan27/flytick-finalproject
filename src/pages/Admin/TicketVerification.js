import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import logo from '../../assets/logo.png';
import Swal from 'sweetalert2';

const TicketVerification = () => {
    const {id} = useParams();
    const token = localStorage.getItem('token');
    const [data, setData] = useState();
    const navigate = useNavigate();

    const dateConvert = (strDate) => {
        return new Date(strDate).toString().replace(' GMT+0700 (Western Indonesia Time)', '');
    }

    let indIDR = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    const handleVerification = async (e) => {
        axios.defaults.headers['Authorization'] = token;
        e.preventDefault();
        const response = await axios.put(`https://flytick-prod.up.railway.app/api/ticket/verify/${id}`);

        // sweet alert
        Swal.fire(response?.data.message);

        console.log(response.data.message);
    }

    useEffect(() => {
        const fetchVerification = async () => {
            if(!token) {
                navigate(`/signin`);
            }
            const response = await axios.get(`https://flytick-prod.up.railway.app/api/ticket/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            
            setData(response.data);
            return response.data;
        }

        fetchVerification();
    }, [id, navigate, token]);

    return (
        <>
            <div className="container-sm p-3">
                <div className="card shadow p-3 mx-3 mb-5 bg-body-tertiary rounded">
                    <div className="card-title text-center">
                        <h1 className="text fs-1">Ticket Verification</h1>
                    </div>
                    <div className="card-body">
                        <div className="row d-flex mt-2">
                            <div className="col-3 text-start">
                                <img src={logo} alt="flytick.png" className="" width={100}/>
                                <p className="fs-6 fw-semibold">FlyTick App</p>
                            </div>
                            <div className="col text-end">
                                <p className="fs-6">Ticket Number</p>
                                <p className="fs-5 fw-semibold">{data?.data.ticketData.ticket_number}</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md text-start pt-2">
                                <p className="fs-6 fw-semibold">Order Detail</p>
                                <table border={0}>
                                    <tbody>
                                    <tr className='align-top'>
                                        <td className='content-start'>Payment Date</td>
                                        <td> : </td>
                                        <td>{dateConvert(data?.data.transactionData.paid_time)}</td>
                                    </tr>
                                    <tr className='align-top'>
                                        <td>Invoice Number</td>
                                        <td> : </td>
                                        <td>{data?.data.transactionData.invoice_number}</td>
                                    </tr>
                                    <tr className='align-top'>
                                        <td>Total Payment</td>
                                        <td> :&nbsp;</td>
                                        <td>{indIDR.format(data?.data.scheduleData.cost)}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md text-start pt-2">
                                <p className='fs-6 fw-semibold'>Buyer Detail</p>
                                <table border={0}>
                                    <tbody>
                                    <tr>
                                        <td className='content-start'>Name</td>
                                        <td>:&nbsp;</td>
                                        <td>{data?.data.userData.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>{data?.data.userData.email}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="border border-secondary p-3 my-4">
                            <div className="row mb-1">
                                <div className="col">
                                    <p className="fw-semibold">Flight No.</p>
                                </div>
                                <div className="col text-end fw-semibold">
                                    <p>{data?.data.flightData.code} | {data?.data.flightData.class}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="fw-semibold">Seat No.</p>
                                </div>
                                <div className="col text-end fw-semibold">
                                    <p>{data?.data.ticketData.seat_number} | {data?.data.ticketData.type}</p>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md text-start pt-3">
                                    <p className="fs-6 fw-semibold">Passenger Data</p>
                                    <table border={0}>
                                        <tbody>
                                        <tr className='align-top'>
                                            <td className='content-start'>Name</td>
                                            <td> : </td>
                                            <td>{data?.data.passengerData.name}</td>
                                        </tr>
                                        <tr className='align-top'>
                                            <td>NIK</td>
                                            <td> : </td>
                                            <td>{data?.data.passengerData.nik}</td>
                                        </tr>
                                        <tr className='align-top'>
                                            <td>Telp.</td>
                                            <td> :&nbsp;</td>
                                            <td>{data?.data.passengerData.telp}</td>
                                        </tr>
                                        <tr className='align-top'>
                                            <td>Passport No.</td>
                                            <td> :&nbsp;</td>
                                            <td>{data?.data.passengerData.no_passport || ''}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md text-start pt-3 text-center">
                                <p className='fs-6 fw-semibold text-start'>Ticket Data</p>
                                <div className="row mt-2">
                                    <p className="fst-italic">Departure</p>
                                    <p>{data?.data.fromAirportData.name} {`(${data?.data.fromAirportData.code})`}</p>
                                    <p>{dateConvert(data?.data.scheduleData.departure_time)}</p>
                                </div>
                                <div className="row mt-2">
                                    <p className="fst-italic">Arrival</p>
                                    <p>{data?.data.toAirportData.name} {`(${data?.data.toAirportData.code})`}</p>
                                    <p>{dateConvert(data?.data.scheduleData.arrival_time)}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-grid gap-2 mx-auto my-4">
                            {data?.data.ticketData.checked_in === false ? <button className="btn btn-success" onClick={handleVerification}>
                                Verify
                            </button> : <button className="btn btn-secondary disabled">
                                Verify
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default TicketVerification;