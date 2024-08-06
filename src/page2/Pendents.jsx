import React from 'react'

export default function Pendents() {
  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Note-</strong> This is not final price please click the item and select all the field and see original price.  .
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<div className="container-fluid d-flex justify-content-center align-items-center">
  <div className="view text-center">
    <h1 className='view'>Pendents</h1>
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
        <img src="https://www.caretline.com/product/pendent/Bold%20Alphabet%20C%20Pendant%201.jpg" className="card-img-top" alt="Card Image 1" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CP1435</p>
        <p className="mb-0 ms-auto">₹ 5388.19</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img src="https://www.caretline.com/product/pendent/Bold%20Alphabet%20D%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CP1436</p>
        <p className="mb-0 ms-auto">₹ 5819.24</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img src="https://www.caretline.com/product/pendent/Bold%20Alphabet%20E%20Pendant%201.jpg" className="card-img-top" alt="Card Image 3" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CP1437</p>
        <p className="mb-0 ms-auto">₹ 5675.56</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img src="https://www.caretline.com/product/pendent/Bold%20Alphabet%20F%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CP1438</p>
        <p className="mb-0 ms-auto">₹ 5388.19</p>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/pendent/Bold%20Alphabet%20G%20Pendant%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1439 </p>
         <p className='mb-0 ms-auto'>₹ 5891.09</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Bold%20Alphabet%20H%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1440 </p>
         <p className='mb-0 ms-auto'>₹ 5891.09</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Bold%20Alphabet%20I%20Pendant%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1441</p>
         <p className='mb-0 ms-auto'>₹ 5388.19</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Bold%20Alphabet%20J%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1442</p>
         <p className='mb-0 ms-auto'>₹ 5388.19</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/pendent/Hamsa%20Hand%20Pendant%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1443</p>
         <p className='mb-0 ms-auto'>₹23668.37</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Omkara%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1444 </p>
         <p className='mb-0 ms-auto'>₹11060.91</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Om%20Ganpati%20Pendant%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1445</p>
         <p className='mb-0 ms-auto'>₹ 10543.85</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Shree%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1446 </p>
         <p className='mb-0 ms-auto'>₹ 25099.56</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/pendent/Vishuddha%20Throat%20Chakra%20Pendant%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1447 </p>
         <p className='mb-0 ms-auto'>₹ 10624.19</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Delicate%20Waves%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1448 </p>
         <p className='mb-0 ms-auto'>₹ 8897.14</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/You%20Melt%20My%20Heart%20Pendant%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1449</p>
         <p className='mb-0 ms-auto'>₹ 9989.48</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Omkara%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1450</p>
         <p className='mb-0 ms-auto'>₹ 23892.4</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/pendent/Interlocked%20Heart%20Pendant%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1451 </p>
         <p className='mb-0 ms-auto'>₹ 23892.4</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Dianty%20Miracle%20Plate%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1452</p>
         <p className='mb-0 ms-auto'>₹ 9989.48</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Sacred%20Ganesha%20Pendant%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1453</p>
         <p className='mb-0 ms-auto'>₹ 8897.14</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/pendent/Rose%20Radiance%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CP1454 </p>
         <p className='mb-0 ms-auto'>₹ 25099.56</p>
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
