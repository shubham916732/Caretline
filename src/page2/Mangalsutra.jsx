import React from 'react'
import './Mangalsutra.css';
import { Link } from 'react-router-dom';

export default function Mangalsutra() {
  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Note-</strong> This is not final price please click the item and select all the field and see original price.  .
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div className="container-fluid d-flex justify-content-center align-items-center">
  <div className="view text-center">
    <h1 className='view'>Mangalsutra </h1>
  </div>
</div>
<div className="container-fluid mt-3 mb-7">
  <div className="row align-items-start ">
    <div className="col-md-6">
      <div className="dropdown">
        <h2>Filter</h2>
        <button className="filter btn btn-secondary dropdown-toggle text-left" type="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Price
        </button>
        <ul className=" drp dropdown-menu">
   <li className="li">
     <input type="radio" id="price1" name="price" />
     <label for="price1">
       <a className="dropdown-item" href="#">₹0 to ₹10,000</a>
     </label>
   </li>
   <li className="li">
     <input type="radio" id="price2" name="price" />
     <label for="price2">
       <a className="dropdown-item" href="#">₹10,000 to ₹25,000</a>
     </label>
   </li>
   <li className="li">
     <input type="radio" id="price3" name="price" />
     <label for="price3">
       <a className="dropdown-item" href="#">₹25,000 to ₹30,000</a>
     </label>
   </li>
   <li className="li">
     <input type="radio" id="price4" name="price" />
     <label for="price4">
       <a className="dropdown-item" href="#">₹30,000 to ₹50,000</a>
     </label>
   </li>
   <li className="li">
     <input type="radio" id="price5" name="price" />
     <label for="price5">
       <a className="dropdown-item" href="#">₹50,000 to ₹80,000</a>
     </label>
   </li>
   <li className="li">
     <input type="radio" id="price6" name="price" />
     <label for="price6">
       <a className="dropdown-item" href="#">₹80,000 to Above</a>
     </label>
   </li>
   <li className="text-center pt-0">
     <button className="filter3 btn">Filter</button>
   </li>
 </ul>
      </div>

    </div>
    <div className="col-md-6 d-flex justify-content-start"><br />
   <button className="filter2 btn btn-secondary dropdown-toggle text-left" type="button" data-bs-toggle="dropdown"
     aria-expanded="false">
     Weight Range
   </button>
   <ul className=" dry dropdown-menu">
     <li className='li'><input type="radio" /> <label htmlFor=""><a className="dropdown-item" href="#">0 - 2 gms</a></label>
     </li>
     <li className='li'><input type="radio" /> <label htmlFor=""><a className="dropdown-item" href="#">2 - 5 gms</a></label>
     </li>
     <li className='li'><input type="radio" /> <label htmlFor=""><a className="dropdown-item" href="#">5 - Above
           gms</a></label></li>
     <li className='text-center pt-0'>
       <button className='filter3 btn pt-0'>filter</button>
     </li>
   </ul>
 </div>
  </div>
</div>
<div className="container-fluid mt-4">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <Link to='/m1'>
         <img src="https://www.caretline.com/product/mangalsutra/Urmi%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 1" />
         </Link>
         </div>
         <div className='price'>
         <p>CM0384 </p>
         <p className='price2'>₹ 16285.85</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <Link to='/m2'>
         <img src="https://www.caretline.com/product/mangalsutra/Navya%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 2" />
         </Link>
        </div>
        <div className='price'>
         <p>CM0385 </p>
         <p className='price2'>₹ 29257.92</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <Link to='/m3'>
         <img src="https://www.caretline.com/product/mangalsutra/Amaya%20Mangalsutra%201.jpg" className="card-img-top3" alt="Card Image 3" />
         </Link>
       </div>
       <div className='price'>
         <p>CM0386 </p>
         <p className='price2'>₹ 13779.6</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-3">
       <div className="card">
         <Link to='/m4'>
         <img src="https://www.caretline.com/product/mangalsutra/Lisa%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 4" />
         </Link>
       </div>
       <div className='price'>
         <p>CM0387 </p>
         <p className='price2'>₹ 36356.17</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
        <Link to='/m5'>
         <img src="https://www.caretline.com/product/mangalsutra/Sonya%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 1" />
         </Link>
         </div>
         <div className='price'>
         <p>CM0388 </p>
         <p className='price2'>₹ 20593.31</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <Link to='/m6'>
         <img src="https://www.caretline.com/product/mangalsutra/Chayla%20Leafy%20Gold%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 2" />
         </Link>
        </div>
        <div className='price'>
         <p>CM0389 </p>
         <p className='price2'>₹ 29670.95</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
        <Link to='/m7'>
         <img src="https://www.caretline.com/product/mangalsutra/Lina%20Bloom%20Mangalsutra%201.jpg" className="card-img-top3" alt="Card Image 3" />
         </Link>
       </div>
       <div className='price'>
         <p>CM0390</p>
         <p className='price2'>₹ 17943.63</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
        <Link to='/m8'>
         <img src="https://www.caretline.com/product/mangalsutra/Sukriti%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 4" />
         </Link>
       </div>
       <div className='price'>
         <p>CM0391 </p>
         <p className='price2'>₹ 24961.54</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/mangalsutra/Anisha%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='price'>
         <p>CM0392 </p>
         <p className='price2'>₹32488.26</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/mangalsutra/Ziva%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='price'>
         <p>CM0393 </p>
         <p className='price2'>₹ 23602.19</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/mangalsutra/Dhriti%20Mangalsutra%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='price'>
         <p>CM0394</p>
         <p className='price2'>₹ 15555.83</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/mangalsutra/Advika%20Miracle%20Plate%20Diamond%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='price'>
         <p>CM0395 </p>
         <p className='price2'>₹ 39307.38</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/mangalsutra/Rhea%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='price'>
         <p>CM0396 </p>
         <p className='price2'>₹15136.11</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/mangalsutra/Archa%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='price'>
         <p>CM0397 </p>
         <p className='price2'>₹ 21880.81</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/mangalsutra/Adveta%20Mangalsutra%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='price'>
         <p>CM0398</p>
         <p className='price2'>₹ 21521.59</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/mangalsutra/Netra%20Mangalsutra%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='price'>
         <p>CM0399 </p>
         <p className='price2'>₹ 16417.94</p>
       </div>
     </div>
   </div>
 </div>
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
    
      <h2 className=' footer2 container pb-7'>Copyright Caretline © 2021. Design & Develop By Sachin Sharma</h2>
</div>
</div>
  )
}

  