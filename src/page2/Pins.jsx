import React from 'react'

export default function Pins() {
  return (
    <div>
       <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Note-</strong> This is not final price please click the item and select all the field and see original price.  .
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<div className="container-fluid d-flex justify-content-center align-items-center">
  <div className="view text-center">
    <h1 className='view'>Pins </h1>
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
        <img src="https://www.caretline.com/product/nose%20pins/Karvi%20Nose%20Ring%201.jpg" className="card-img-top" alt="Card Image 1" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CNP0912</p>
        <p className="mb-0 ms-auto">₹ 6601.01</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img src="https://www.caretline.com/product/nose%20pins/Soha%20Nose%20Ring%201.jpg" className="card-img-top" alt="Card Image 2" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CNP0913</p>
        <p className="mb-0 ms-auto">₹ 9538.06</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img src="https://www.caretline.com/product/nose%20pins/Isha%20Nose%20Ring%201.jpg" className="card-img-top" alt="Card Image 3" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CNP0914</p>
        <p className="mb-0 ms-auto">₹ 13403.39</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img src="https://www.caretline.com/product/nose%20pins/Fulki%20Nose%20Ring%201.jpg" className="card-img-top" alt="Card Image 4" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CNP0915</p>
        <p className="mb-0 ms-auto">₹ 10178.76</p>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/nose%20pins/Tashi%20Nose%20Ring%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0916 </p>
         <p className='mb-0 ms-auto'>₹9828.34 </p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Kamna%20Nose%20Ring%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0917 </p>
         <p className='mb-0 ms-auto'>₹ 9750.43</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Moonbeam%20Diamond%20Nose%20Pin%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0918</p>
         <p className='mb-0 ms-auto'>₹ 13328.32</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Karvi%20Nose%20Ring%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0919</p>
         <p className='mb-0 ms-auto'>₹ 6601.87</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/nose%20pins/Soha%20Nose%20Ring%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0920</p>
         <p className='mb-0 ms-auto'>₹ 9538.65</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Kamna%20Nose%20Ring%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0921 </p>
         <p className='mb-0 ms-auto'>₹ 13404.32</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Leaf%20Drop%20Nose%20Pin%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0922</p>
         <p className='mb-0 ms-auto'>₹ 10178.43</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Bluebell%20Nose%20Pin%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0923 </p>
         <p className='mb-0 ms-auto'>₹ 3801.43</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/nose%20pins/Primrose%20Nose%20Pin%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0924 </p>
         <p className='mb-0 ms-auto'>₹ 2345.32</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Samaira%20Dazzle%20Nose%20Pin%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0925 </p>
         <p className='mb-0 ms-auto'>₹ 4235.6</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Starry%20Nose%20Pin%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0926</p>
         <p className='mb-0 ms-auto'>₹ 41251.7</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Solitaire%20Delight%20Nose%20Pin%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0927</p>
         <p className='mb-0 ms-auto'>₹ 6534.76</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/nose%20pins/Flower%20Blossom%20Nose%20Pin%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0928 </p>
         <p className='mb-0 ms-auto'>₹ 10231.87</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Adhya%20Nose%20Pin%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0929</p>
         <p className='mb-0 ms-auto'>₹ 6523.7</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Meeta%20Petals%20Nose%20Pin%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0930</p>
         <p className='mb-0 ms-auto'>₹ 54123.65</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/nose%20pins/Budding%20Floral%20Nose%20Pin%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CNP0931 </p>
         <p className='mb-0 ms-auto'>₹ 4356.65</p>
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
