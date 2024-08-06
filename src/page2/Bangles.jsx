import React from 'react'
import { Link } from 'react-router-dom'

export default function Bangles() {
return (
<div>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Note-</strong> This is not final price please click the item and select all the field and see original price.  .
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

    <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="view text-center">
            <h1 className='view'>Bangles </h1>
        </div>
    </div>
    <div className="container-fluid ">
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
                <Link to='/b1'>
                    <img src="https://www.caretline.com/product/bangles/Tranquility%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 1" /></Link>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <p className="mb-0">CB0856</p>
                    <p className="mb-0 ms-auto">₹ 18165.08</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b2'>
                    <img src="https://www.caretline.com/product/bangles/Elegant%20Posy%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 2" /></Link>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <p className="mb-0">CB0857</p>
                    <p className="mb-0 ms-auto">₹ 21515.93</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b3'>
                    <img src="https://www.caretline.com/product/bangles/Glittering%20Florid%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 3" /></Link>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <p className="mb-0">CB0858</p>
                    <p className="mb-0 ms-auto">₹ 22671.07</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b4'>
                    <img src="https://www.caretline.com/product/bangles/Sheen%20Diamond%20Stackable%20Bangles%201.jpg"
                        className="card-img-top" alt="Card Image 4" /></Link>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <p className="mb-0">CB0859</p>
                    <p className="mb-0 ms-auto">₹ 35936.44</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b5'>
                    <img src="https://www.caretline.com/product/bangles/Gleam%20Solitaire%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 1" /></Link>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0860 </p>
                    <p className='mb-0 ms-auto'>₹ 24838.71</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b6'>
                    <img src="https://www.caretline.com/product/bangles/Radiate%20Solitaire%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 2" /></Link>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0861 </p>
                    <p className='mb-0 ms-auto'>₹ 200015.73</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b7'>
                    <img src="https://www.caretline.com/product/bangles/Shining%20Diamond%20Bangle%201.jpg"
                        className="card-img-top3" alt="Card Image 3" /></Link>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0862</p>
                    <p className='mb-0 ms-auto'>₹ 29990.51</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b8'>
                    <img src="https://www.caretline.com/product/bangles/Luminous%20Diamond%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 4" /></Link>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0863</p>
                    <p className='mb-0 ms-auto'>₹ 36240.81</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b9'>
                    <img src="https://www.caretline.com/product/bangles/Glitter%20Diamond%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 1" /></Link>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0864</p>
                    <p className='mb-0 ms-auto'>₹32815.32</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b10'>
                    <img src="https://www.caretline.com/product/bangles/Dazzle%20Diamond%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 2" /></Link>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0865 </p>
                    <p className='mb-0 ms-auto'>₹ 21593.4</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b11'>
                    <img src="https://www.caretline.com/product/bangles/Glinting%20Clover%20Bangle%201.jpg"
                        className="card-img-top3" alt="Card Image 3" /></Link>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0866</p>
                    <p className='mb-0 ms-auto'>₹ 32265.27</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                <Link to='/b12'>
                    <img src="https://www.caretline.com/product/bangles/Brilliant%20Diamond%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 4" /></Link>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0867 </p>
                    <p className='mb-0 ms-auto'>₹ 255047.54</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">

                    <img src="https://www.caretline.com/product/bangles/Maisie%20Interlaced%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 1" />
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0868 </p>
                    <p className='mb-0 ms-auto'>₹30596.41</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">

                    <img src="https://www.caretline.com/product/bangles/Allure%20Rosy%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 2" />
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0869 </p>
                    <p className='mb-0 ms-auto'>₹ 27056.3</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">

                    <img src="https://www.caretline.com/product/bangles/Classic%20Navratna%20Bangle%201.jpg"
                        className="card-img-top3" alt="Card Image 3" />
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0870</p>
                    <p className='mb-0 ms-auto'>₹ 38818.64</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">

                    <img src="https://www.caretline.com/product/bangles/Alina%20Sparkle%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 4" />
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0871</p>
                    <p className='mb-0 ms-auto'>₹ 44054.65</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">

                    <img src="https://www.caretline.com/product/bangles/Ellen%20Glint%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 1" />
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0872 </p>
                    <p className='mb-0 ms-auto'>₹37773.45</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">

                    <img src="https://www.caretline.com/product/bangles/Budding%20Lotus%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 2" />
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0873</p>
                    <p className='mb-0 ms-auto'>₹ 44488.53</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">

                    <img src="https://www.caretline.com/product/bangles/Creeper%20Wave%20Bangle%201.jpg"
                        className="card-img-top3" alt="Card Image 3" />
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0874</p>
                    <p className='mb-0 ms-auto'>₹ 179680.93</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                    <img src="https://www.caretline.com/product/bangles/Ariel%20Twist%20Bangle%201.jpg"
                        className="card-img-top" alt="Card Image 4" />
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p className="mb-0">CB0875 </p>
                    <p className='mb-0 ms-auto'>₹ 25630.78</p>
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