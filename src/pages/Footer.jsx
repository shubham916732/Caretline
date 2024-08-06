import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
    <div className="footer container-fluid my-4">
    <div className="row justify-content-center align-items-start">
        <div className="col-lg-4 col-md-6 mb-4 mt-3 d-flex flex-column align-items-start">
            <h3 className="useful">Useful Links</h3>
            <ul className="list-unstyled">
                <li><a href="#" className="condition ml-9">Privacy Policy</a></li>
                <li><a href="#" className="condition ml-9">Terms & Condition</a></li>
                <li><a href="#" className="condition ml-9">14 Days Refund</a></li>
            </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mt-3 d-flex flex-column align-items-start">
            <h3 className="useful2">Shop With Confidence</h3>
            <ul className="list-unstyled">
                <li><a href="#" className="condition ml-9">Why Buy with Us?</a></li>
                <li><a href="#" className="condition ml-9">Our Certification</a></li>
                {/* <li><a href="#" className="condition1">14 Days Refund</a></li> */}
            </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mt-3 d-flex flex-column align-items-start">
            <h3 className="useful">Contact Us</h3>
            <ul className="list-unstyled">
                <li><a href="#" className="condition ml-9 mb-9">Company Name : Caretline</a></li>
                <li><a href="#" className="condition">- +91 8591605101</a></li>
                <li><a href="#" className="condition">- customer@caretline.com</a></li>
                <li><a href="#" className="condition">- Office no 03 Durga Nagar Joeshwari-Vikhroli</a></li>
                <li><a href="#" className="condition">Link Road Near Matoshree Sports Complex,</a></li>
                <li><a href="#" className="condition">Jogeshwari (E, Mumbai, Maharashtra 400060</a></li>
            </ul>
        </div>
    </div>
    
      <h2 className=' footer2 container'>Copyright Caretline © 2021. Design & Develop By Sachin Sharma</h2>
</div>


     {/* </div> */}

 </>
  )
}
