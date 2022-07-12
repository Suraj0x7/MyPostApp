import React from 'react'

function Footer() {
  return (
    <div className='mt-5 container-fluid bg-primary bg-gradient text-white' style={{minHeight:'12rem'}}>
      <div className='row pt-4 text-center'>
          <div className='col-lg-4 col-md-4 col-sm-12 '>
              <h5>Quick Links</h5>
                      <div className='d-flex flex-column mb-2 '>
                        <a href='#' className='text-white p-1'>About</a>
                        <a href='#' className='text-white p-1'>Our Post</a>
                        <a href='#' className='text-white p-1'>Our Team</a>
                        <a href='#' className='text-white p-1'>Contact Us</a>
                      </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 mb-2 '>
              <h5>Newsletter</h5>
              <div style={{minHeight: '8rem' }} className='d-flex flex-column justify-content-around '>
                       <input type="text" className='form-control' placeholder='Suscribe the Newsletter'/>
                       <button className='btn btn-warning'>Subscribe</button>
                      </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 '>
              <h5>Contact Address</h5>
              <div className='d flex flex-column'>
                <p><i className="px-1 fa-solid fa-location-arrow"></i>26 Huston Street</p>
                <p>Newton City</p>
                <p>Bihar Saran-841218</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer