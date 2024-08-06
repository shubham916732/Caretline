import React from 'react'
import './Earring.css';
import { Link } from 'react-router-dom';

export default function Earring() {
  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Note-</strong> This is not final price please click the item and select all the field and see original price.  .
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div className="container-fluid d-flex justify-content-center align-items-center">
  <div className="view text-center">
    <h1 className='view'>Earrings </h1>
  </div>
</div>
<div className="container-fluid mt-2 mb-7">
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
<Link to='/e1'>
        <img src="https://www.caretline.com/product/earring/Twist%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 1" />
      
        </Link></div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CE1063</p>
        <p className="mb-0 ms-auto">₹ 44339.18</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
<Link to='/e2'>
        <img src="https://www.caretline.com/product/earring/First%20Dance%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 2" />
        </Link>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CE1064</p>
        <p className="mb-0 ms-auto">₹ 44477.2</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
<Link to='/e3'>
        <img src="https://www.caretline.com/product/earring/Twirling%20Beauty%20Earrings%201.jpg" className="card-img-top" alt="Card Image 3" />
        </Link>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CE1065</p>
        <p className="mb-0 ms-auto">₹ 46029.41</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
<Link to='/e4'>
        <img src="https://www.caretline.com/product/earring/Snow%20Drop%20Pearl%20Earrings%201.jpg" className="card-img-top" alt="Card Image 4" />
        </Link>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CE1066</p>
        <p className="mb-0 ms-auto">₹ 12222.24</p>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <Link to='/e5'>
         <img src="https://www.caretline.com/product/earring/Amara%20Floret%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 1" />
         </Link>
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1067 </p>
         <p className='mb-0 ms-auto'>₹ 76387.63</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
       <Link to='/e6'>
         <img src="https://www.caretline.com/product/earring/Amira%20Leaf%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 2" />
         </Link>
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1068 </p>
         <p className='mb-0 ms-auto'>₹ 8181.55</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
        <Link to='/e7'>
         <img src="https://www.caretline.com/product/earring/Blazing%20Sun%20Drop%20Earrings%201.jpg" className="card-img-top3" alt="Card Image 3" />
         </Link>
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1069</p>
         <p className='mb-0 ms-auto'>₹ 19060.15</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <Link to='/e8'>
         <img src="https://www.caretline.com/product/earring/Mishka%20Bloom%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 4" />
         </Link>
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1070 </p>
         <p className='mb-0 ms-auto'>₹ 25049.6</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
        <Link to='/e9'>
         <img src="https://www.caretline.com/product/earring/Adagio%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 1" />
         </Link>
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1071 </p>
         <p className='mb-0 ms-auto'>₹11431.97</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
        <Link to='/e10'>
         <img src="https://www.caretline.com/product/earring/Hex%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 2" />
         </Link></div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1072 </p>
         <p className='mb-0 ms-auto'>₹ 19404.17</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <Link to='/e11'>
         <img src="https://www.caretline.com/product/earring/Claire%20Drop%20Earrings%201.jpg" className="card-img-top3" alt="Card Image 3" />
         </Link>
         </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1073</p>
         <p className='mb-0 ms-auto'>₹ 13686.38</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
        <Link to='/e12'>
         <img src="https://www.caretline.com/product/earring/Rhodeus%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 4" />
         </Link>
         </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1074 </p>
         <p className='mb-0 ms-auto'>₹ 13075.34</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/earring/Arwa%20Floret%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1075 </p>
         <p className='mb-0 ms-auto'>₹55461.12</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/earring/Glinting%20Blossom%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1076 </p>
         <p className='mb-0 ms-auto'>₹ 12052.55</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/earring/Gandhabhadra%20Earrings%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1077</p>
         <p className='mb-0 ms-auto'>₹ 22938.62</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/earring/Paige%20Star%20Cutout%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1078 </p>
         <p className='mb-0 ms-auto'>₹ 36136.78</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/earring/Elegant%20Dewdrops%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1079 </p>
         <p className='mb-0 ms-auto'>₹15006.07</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/earring/Trio%20Primrose%20Drop%20Earrings%201.jpeg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1080 </p>
         <p className='mb-0 ms-auto'>₹ 14141.9</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/earring/Saanvi%20Vibrant%20Drop%20Earrings%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1081</p>
         <p className='mb-0 ms-auto'>₹ 63647.9</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/earring/Paige%20Star%20Cutout%20Drop%20Earrings%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CE1082 </p>
         <p className='mb-0 ms-auto'>₹ 9986.11</p>
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
