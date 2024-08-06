import React from 'react'

export default function Colorstone() {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="view text-center">
        <h1 className='view'>Colourful Pendent </h1>
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
            <img src="https://www.caretline.com/product/pendent/Swerve%20Cutout%20Pendant%20%201.jpg" className="card-img-top" alt="Card Image 1" />
          </div>
          <div className="d-flex justify-content-between mt-2">
            <p className="mb-0">CP1305</p>
            <p className="mb-0 ms-auto">₹ 15327.17</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img src="https://www.caretline.com/product/pendent/Haze%20Elegance%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
          </div>
          <div className="d-flex justify-content-between mt-2">
            <p className="mb-0">CP1306</p>
            <p className="mb-0 ms-auto">₹ 16681.11</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img src="https://www.caretline.com/product/pendent/Tess%20Butterfly%20Pendant%201.jpg" className="card-img-top" alt="Card Image 3" />
          </div>
          <div className="d-flex justify-content-between mt-2">
            <p className="mb-0">CP1307</p>
            <p className="mb-0 ms-auto">₹ 16595.62</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img src="https://www.caretline.com/product/pendent/Amer%20Fountain%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
          </div>
          <div className="d-flex justify-content-between mt-2">
            <p className="mb-0">CP1308</p>
            <p className="mb-0 ms-auto">₹ 15511.29</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container-fluid">
       <div className="row">
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
    
             <img src="https://www.caretline.com/product/pendent/Vivian%20Petal%20Pendant%20%201.jpg" className="card-img-top" alt="Card Image 1" />
             </div>
             <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1310</p>
             <p className='mb-0 ms-auto'>₹ 17146.75</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Arris%20Pearl%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
            </div>
            <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1311 </p>
             <p className='mb-0 ms-auto'>₹ 22893.55</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Summer%20Peridot%20Pendant%201.jpg" className="card-img-top3" alt="Card Image 3" />
           </div>
           <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1312</p>
             <p className='mb-0 ms-auto'>₹ 14648.84</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Evera%20Cutout%20Gold%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
           </div>
           <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1313</p>
             <p className='mb-0 ms-auto'>₹ 21608.89</p>
           </div>
         </div>
       </div>
     </div>
    <div className="container-fluid">
       <div className="row">
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
    
             <img src="https://www.caretline.com/product/pendent/Lahari%20Paisley%20Pendant%201.jpg" className="card-img-top" alt="Card Image 1" />
             </div>
             <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0"> CP1314</p>
             <p className='mb-0 ms-auto'>₹ 36861.87</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Oval%20Halo%20Miracle%20Plate%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
            </div>
            <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1316</p>
             <p className='mb-0 ms-auto'>₹ 31184.8</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Halo%20Emerald%20Birthstone%20Pendant%201.jpg" className="card-img-top3" alt="Card Image 3" />
           </div>
           <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1317</p>
             <p className='mb-0 ms-auto'>₹ 16597.68</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Bloom%20Scallop%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
           </div>
           <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1319 </p>
             <p className='mb-0 ms-auto'>₹ 59000.2</p>
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
             <img src="https://www.caretline.com/product/pendent/Trio%20Floral%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
            </div>
            <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1320 </p>
             <p className='mb-0 ms-auto'>₹ 53332.89</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Esme%20Hug%20Me%20Pendant%201.jpg" className="card-img-top3" alt="Card Image 3" />
           </div>
           <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1322</p>
             <p className='mb-0 ms-auto'>₹ 8999.37</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Krupali%20Floral%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
           </div>
           <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0"> CP1323</p>
             <p className='mb-0 ms-auto'>₹ 10490.04</p>
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
             <img src="https://www.caretline.com/product/pendent/Sparkling%20Shree%20Pendant%201.jpg" className="card-img-top" alt="Card Image 2" />
            </div>
            <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1324</p>
             <p className='mb-0 ms-auto'>₹ 11080.48</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Delicate%20Dewdrops%20Pendant%201.jpg" className="card-img-top3" alt="Card Image 3" />
           </div>
           <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1330</p>
             <p className='mb-0 ms-auto'>₹ 10255.97</p>
           </div>
         </div>
         <div className="col-lg-3 col-md-6 mb-4">
           <div className="card">
             <img src="https://www.caretline.com/product/pendent/Mila%20Heart%20Pendant%201.jpg" className="card-img-top" alt="Card Image 4" />
           </div>
           <div className='d-flex justify-content-between mt-2'>
             <p className="mb-0">CP1334 </p>
             <p className='mb-0 ms-auto'>₹ 13207.18</p>
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
