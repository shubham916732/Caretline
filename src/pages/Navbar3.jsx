import React from 'react'
import './Navbar3.css'
import { Link } from 'react-router-dom'

export default function Navbar3() {
  return (
    <div>
   <div className='navbar'>
     <div className="container-fluid mt-3">
       <Link className="navbar-brand" to="/">Caretline</Link>

       <div className='search align-items-end justify-content-end'>
         <form className="d-flex" role="search">
           <input className="form-control me-2 pr-0 " type="search" placeholder="Search" aria-label="Search" />
           <button className="btn btn-outline-success mr-20" type="submit">Search</button>
         </form>
       </div>
     </div>
   </div>
 </div>
  )
}
