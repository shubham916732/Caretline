import React from 'react'
import './Collection1.css'
import { Link } from 'react-router-dom'

export default function Collection1() {
  return (
    <div>
    <div className="container-fluid my-4">
   <div className="row">
     <div className="col-lg-4 col-md-6 mb-4">
       <div className="card">
         
         <img src="https://www.caretline.com/images/enamel-jewelry-gold-jewellery.jpg" className="collection card-img-top" alt="Card Image 1" />
         <a href="#" className="btn btn justify-content-center">Enamel Jewellery </a>
         {/* <div className="card-body">
           <a href="#" className="btn1 btn justify-content-center">Enamel Jewellery </a>
         </div> */}
       </div>
     </div>
     <div className="col-lg-4 col-md-6 mb-2">
       <div className="card">
         <img src="https://www.caretline.com/images/color-stone-jewellery.jpg" className=" card-img-top" alt="Card Image 2" />
         <Link to="/color" className="btn5 btn justify-content-center">Color Stone Jewellery</Link>
         {/* <div className="card-body">
           <a href="#" className="btn1 btn justify-content-center">Color Stone Jewellery</a>
         </div> */}
       </div>
     </div>
     <div className="col-lg-4 col-md-6">
       <div className="card">
         <img src="https://www.caretline.com/images/12174.jpg" className="collection1 card-img-top3" alt="Card Image 3" />
         <a href="#" className="btn1 btn">Box Set Piece</a>
         {/* <div className="card-body">
           <a href="#" className="btn1 btn">Box Set Piece</a>
         </div> */}
       </div>
     </div>
     </div>
     </div>
     </div>
  )
}
