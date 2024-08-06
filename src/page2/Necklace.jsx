import React from 'react'
import { Link } from 'react-router-dom'

export default function Necklace() {
  return (
    <>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Note-</strong> This is not final price please click the item and select all the field and see original price.  .
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <div className='container-fluid'>
<div className="container-fluid d-flex justify-content-center align-items-center">
  <div className="view text-center">
    <h1 className='view'>Necklace </h1>
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
        <Link to='/n1'>
        <img src="https://www.caretline.com/product/necklace/Assemble%20Station%20Necklace%201.jpg" className="card-img-top" alt="Card Image 1" />
        </Link>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CN0558</p>
        <p className="mb-0 ms-auto">₹ 18165.08</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
<Link to='/n2'>
        <img src="https://www.caretline.com/product/necklace/Isla%20Glow%20Chain%20Necklace%201.jpg" className="card-img-top" alt="Card Image 2" />
        </Link>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CN0559</p>
        <p className="mb-0 ms-auto">₹ 21515.93</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
<Link to='/n3'>
        <img src="https://www.caretline.com/product/necklace/Hearts%20Lariat%20Chain%20Necklace%201.jpg" className="card-img-top" alt="Card Image 3" />
        </Link>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CN0560</p>
        <p className="mb-0 ms-auto">₹ 22671.07</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
<Link to='/n4'>
        <img src="https://www.caretline.com/product/necklace/Harmony%20Bloom%20Necklace%201.jpg" className="card-img-top" alt="Card Image 4" />
        </Link>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <p className="mb-0">CN0561</p>
        <p className="mb-0 ms-auto">₹ 35936.44</p>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
<Link to='/n5'>
         <img src="https://www.caretline.com/product/necklace/Lush%20Petals%20Chain%20Necklace%201.jpg" className="card-img-top" alt="Card Image 1" />
         </Link>
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0562 </p>
         <p className='mb-0 ms-auto'>₹ 24838.71</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
<Link to='/n6'>
         <img src="https://www.caretline.com/product/necklace/Trillium%20Cluster%20Chain%20Necklace%201.jpg" className="card-img-top" alt="Card Image 2" />
         </Link>
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0563 </p>
         <p className='mb-0 ms-auto'>₹ 200015.73</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
<Link to='/n7'>
         <img src="https://www.caretline.com/product/necklace/Victory%20Blossom%20Necklace%201.jpg" className="card-img-top3" alt="Card Image 3" />
         </Link>
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0564</p>
         <p className='mb-0 ms-auto'>₹ 29990.51</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
<Link to='/n8'>
         <img src="https://www.caretline.com/product/necklace/Self%20Love%20Blooming%20Necklace%201.jpg" className="card-img-top" alt="Card Image 4" />
         </Link>
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0565</p>
         <p className='mb-0 ms-auto'>₹ 36240.81</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
<Link to='/n9'>
         <img src="https://www.caretline.com/product/necklace/Forever%20in%20Love%20Bar%20Necklace%201.jpg" className="card-img-top" alt="Card Image 1" />
         </Link>
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0566</p>
         <p className='mb-0 ms-auto'>₹32815.32</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
<Link to='/n10'>
         <img src="https://www.caretline.com/product/necklace/Starflower%20Necklace%201.jpg" className="card-img-top" alt="Card Image 2" />
         </Link>
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0567 </p>
         <p className='mb-0 ms-auto'>₹ 21593.4</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
<Link to='/n11'>
         <img src="https://www.caretline.com/product/necklace/Aleeza%20Bloom%20Necklace%201.jpg" className="card-img-top3" alt="Card Image 3" />
         </Link>
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0568</p>
         <p className='mb-0 ms-auto'>₹ 32265.27</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
        <Link to='/n12'>
         <img src="https://www.caretline.com/product/necklace/Erica%20Floret%20Necklace%201.jpg" className="card-img-top" alt="Card Image 4" />
         </Link>
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0569 </p>
         <p className='mb-0 ms-auto'>₹ 255047.54</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/necklace/Interlinked%20Loops%20Chain%20Necklace%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0570 </p>
         <p className='mb-0 ms-auto'>₹30596.41</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/necklace/Sparkling%20Star%20Chain%20Necklace%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0571 </p>
         <p className='mb-0 ms-auto'>₹ 27056.3</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/necklace/Twinkling%20Stars%20Fine%20Line%20Necklace%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0572</p>
         <p className='mb-0 ms-auto'>₹ 38818.64</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/necklace/Misty%20Lariat%20Necklace%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0573</p>
         <p className='mb-0 ms-auto'>₹ 44054.65</p>
       </div>
     </div>
   </div>
 </div>
<div className="container-fluid">
   <div className="row">
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">

         <img src="https://www.caretline.com/product/necklace/Treva%20Cutout%20Necklace%201.jpg" className="card-img-top" alt="Card Image 1" />
         </div>
         <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0574 </p>
         <p className='mb-0 ms-auto'>₹37773.45</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/necklace/Quad%20Fine%20Line%20Necklace%201.jpg" className="card-img-top" alt="Card Image 2" />
        </div>
        <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0575</p>
         <p className='mb-0 ms-auto'>₹ 44488.53</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/necklace/Quad%20Triplet%20Necklace%201.jpg" className="card-img-top3" alt="Card Image 3" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0576</p>
         <p className='mb-0 ms-auto'>₹ 179680.93</p>
       </div>
     </div>
     <div className="col-lg-3 col-md-6 mb-4">
       <div className="card">
         <img src="https://www.caretline.com/product/necklace/Audrey%20Oval%20Necklace%201.jpg" className="card-img-top" alt="Card Image 4" />
       </div>
       <div className='d-flex justify-content-between mt-2'>
         <p className="mb-0">CN0577 </p>
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
    </>
  )
}
