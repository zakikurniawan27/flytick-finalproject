import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <>
        <div className='fixed mt-auto mb-auto'>
            <div className='mx-auto row'>
                <img src={logo} alt='logo' className='ms-auto logo'height='75'/>
                <div className='ms-auto col-3'>
                    <h6 className='fw-bold'>About</h6>
                    <p className='text-footer'>About TerbangKuy</p>
                    <p className='text-footer'>Blog</p>
                    <p className='text-footer'>Forum</p>
                </div>
                <div className='col-3'>
                    <h6 className='fw-bold'>Partner with us</h6>
                    <p className='text-footer'>Partnership programs</p>
                    <p className='text-footer'>Connectivity partners</p>
                    <p className='text-footer'>Loyalty program</p>
                </div>
                <div className='col-3'>
                    <h6 className='fw-bold'>Support</h6>
                    <p className='text-footer'>Help Center</p>
                    <p className='text-footer'>Contact us</p>
                    <p className='text-footer'>Privacy policy</p>
                    <p className='text-footer'>Terms of service</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer