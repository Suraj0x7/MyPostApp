import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='container'>
    <h3 className='text-center text-uppercase pt-4'>Contact Us</h3>
    <div className='mx-auto contact-form-container text-mute shadow-sm rounded p-3 lh-2'>
        <form>

        <div className="mb-3">
              <label htmlfor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required/>
            </div>

        <div className="mb-3">
              <label htmlfor="phone" className="form-label">Phone Number</label>
              <input type="email" className="form-control" id="phone" />
            </div>


            <div className="mb-3">
              <label htmlfor="email1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email1" required/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
            <label htmlfor="timing" className="form-label">When can we reach you?</label>
              <select className="form-select" id='timing'>
              <option defaultValue=''>Best time to reach</option>
              <option value="M">Morning</option>
              <option value="A">AfterNoon</option>
              <option value="E">Evening</option>
              </select>
            </div>

            <div className="mb-3">
            <label htmlfor="query" className="form-label">Enter your Query below</label>
              <textarea className='form-control' id='query' required></textarea>
            </div>
           <div className='d-grid'>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
    </form>
    </div>
</div>

  )
}

export default Contact