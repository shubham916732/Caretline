import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
       <div className="container-fluid mt-5">
    <div className="row align-items-center ">
    <div className="col-md-4 d-flex justify-content-center">
      <Link className='service' to='bangles'>
        <img src="https://www.caretline.com/images/panel/Bangles.png" alt="Traditional Makeup" className="traditional2 img-fluid1"/>
        </Link>
      </div>
        <div className="col-md-4 d-flex justify-content-center mt-2">
        <Link className='service' to='bracelat'>
        <img src="https://www.caretline.com/images/panel/Bracelet.png" alt="Traditional Makeup" className="traditional2 img-fluid "/>
      </Link>
      </div>
      <div className="col-md-4 d-flex justify-content-center mt-2">
      <Link className='service' to='pins'>
        <img src="https://www.caretline.com/images/panel/nose__pins.jpeg" alt="Traditional Makeup" className="traditional2 img-fluid "/>
      </Link>
      </div>
    </div>
</div>
       <div className="container-fluid mt-3">
    <div className="row align-items-center ">
    <div className="col-md-4 d-flex justify-content-center mt-2">
    <Link className='service' to='cufflinks'>
        <img src="https://www.caretline.com/images/cufflink.png" alt="Traditional Makeup" className="traditional2 img-fluid "/>
      </Link>
      </div>
        <div className="col-md-4 d-flex justify-content-center mt-2">
        <Link className='service' to='pendals'>
        <img src="https://www.caretline.com/images/panel/pendent.jpeg" alt="Traditional Makeup" className="traditional2 img-fluid "/>
      </Link>
      </div>
      <div className="col-md-4 d-flex justify-content-center mt-2">
      <Link className='service' to='#'>
        <img src="https://www.caretline.com/images/panel/gifts_.jpeg" alt="Traditional Makeup" className="traditional2 img-fluid "/>
      </Link>
      </div>
    </div>
</div>
    </>
  )
}
