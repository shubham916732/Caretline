import React from 'react'

export default function Bracelet() {
  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Note-</strong> This is not final price please click the item and select all the field and see original price.  .
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div className="container-fluid d-flex justify-content-center align-items-center">
  <div className="view text-center">
    <h1 className='view'>Bracelet </h1>
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
        <img src="https://www.caretline.com/product/bracelet/Luminous%20Tennis%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 1" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CB0757</p>
        <p className="mb-0 ms-auto">₹ 81368.08</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img src="https://www.caretline.com/product/bracelet/Florid%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 2" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CB0758</p>
        <p className="mb-0 ms-auto">₹ 22723.93</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img src="https://www.caretline.com/product/bracelet/Duo%20Interlinked%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 3" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CB0759</p>
        <p className="mb-0 ms-auto">₹ 256991.07</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img src="https://www.caretline.com/product/bracelet/Ira%20Personalised%20Adjustable%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 4" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CB0760</p>
        <p className="mb-0 ms-auto">₹ 21535.44</p>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/bracelet/Twinkle%20Diamond%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0761 </p>
         <p className='mb-0 ms-auto'>₹ 66944.71</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Pansy%20Diamond%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0762 </p>
         <p className='mb-0 ms-auto'>₹ 50199.73</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Classic%20Grid%20Bracelet%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0763</p>
         <p className='mb-0 ms-auto'>₹ 73709.51</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Classic%20Oval%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0764</p>
         <p className='mb-0 ms-auto'>₹ 83485.81</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/bracelet/Jenny%20Seven%20Stone%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0765</p>
         <p className='mb-0 ms-auto'>₹ 72019.32</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Nazia%20Sparkle%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB07566 </p>
         <p className='mb-0 ms-auto'>₹ 37033.4</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Gala%20Night%20Bracelet%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0767</p>
         <p className='mb-0 ms-auto'>₹ 60917.27</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Duo%20Bud%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0768 </p>
         <p className='mb-0 ms-auto'>₹ 31007.54</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/bracelet/Bud%20and%20Verdant%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0769 </p>
         <p className='mb-0 ms-auto'>₹35202.41</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Halo%20Heart%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0770 </p>
         <p className='mb-0 ms-auto'>₹ 82908.3</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Twisted%20Infinity%20Bracelet%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0771</p>
         <p className='mb-0 ms-auto'>₹ 39976.64</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Hallie%20Stamped%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0772</p>
         <p className='mb-0 ms-auto'>₹ 52698.65</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/bracelet/Amour%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0773 </p>
         <p className='mb-0 ms-auto'>₹ 73111.45</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Tri%20Orb%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0774</p>
         <p className='mb-0 ms-auto'>₹ 29167.53</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Lani%20Engrave%20Infant%20Bracelet%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0775</p>
         <p className='mb-0 ms-auto'>₹ 13650.93</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/bracelet/Classic%20Oval%20Bracelet%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CB0776 </p>
         <p className='mb-0 ms-auto'>₹ 72019.78</p>
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
