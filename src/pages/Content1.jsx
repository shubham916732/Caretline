import React from 'react'
import { Link } from 'react-router-dom'
import './Content1.css'

export default function Content1() {
 
  return (
    <>
     <div className="container-fluid my-4">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-2">
       <div className="card">

         <img src="https://www.caretline.com/images/box1.jpg" className="card-img-top" alt="Card Image 1" />
         <Link className="link nav-link active" to="/ring">Rings</Link>
         {/* <div className="card-body">
         <a href="#" className="btn">Rings</a>
         </div> */}
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/images/box2.jpg" className="card-img-top" alt="Card Image 2" />
         <Link to="mangalsutra" className="link nav-link active"> Mangalsutra</Link>
         {/* <div className="card-body">
           <a href="#" className="btn"> Mangalsutra</a>
         </div> */}
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/images/box3.jpg" className="card-img-top3" alt="Card Image 3" />
         <Link to="earrings" className="link nav-link active"> Earrings </Link>
         {/* <div className="card-body">
           <a href="#" className="btn"> Earrings </a>
         </div> */}
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/images/box4.jpg" className="card-img-top" alt="Card Image 4" />
         <Link to="nacklace" className="link nav-link active"> Nacklace </Link>
         {/* <div className="card-body">
           <a href="#" className="btn"> Nacklece </a>
         </div> */}
       </div>
     </div>
   </div>
 </div>
</>
  )
}
