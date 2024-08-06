import React from 'react'

export default function Bangles5() {
  return (
    <div className="container-fluid mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://www.caretline.com/product/bangles/Sheen%20Diamond%20Stackable%20Bangles%201.jpg" className="d-block w-100" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.caretline.com/product/bangles/Sheen%20Diamond%20Stackable%20Bangles%202.jpg" className="second-slide w-100" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.caretline.com/product/bangles/Sheen%20Diamond%20Stackable%20Bangles%203.jpg" className="w-100" alt="Third slide"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="size">Select Size</label>
                                <select id="size" name="size" className="form-control">
                                    <option value="">Select Size</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="metal">Select Metal</label>
                                <select id="metal" name="metal" className="form-control">
                                    <option value="">Select Size</option>
                                    <option value="14kt">14kt Rose Gold</option>
                                    <option value="10kt">10kt Yellow Gold</option>
                                    <option value="10kt">10kt White Gold</option>
                                    <option value="14kt">14kt Yellow Gold</option>
                                    <option value="14kt">14kt Rose Gold</option>
                                    <option value="114kt">14kt White Gold</option>
                                    <option value="18kt">18kt Yellow Gold</option>
                                    <option value="18kt">18kt Rose Gold</option>
                                    <option value="18kt">18kt White Gold</option>
                                    <option value="22kt">22kt Yellow Gold</option>
                                    <option value="22kt">22kt Rose Gold</option>
                                    <option value="22kt">22kt White Gold</option>
                                    <option value="23kt">23kt Yellow Gold</option>
                                    <option value="23kt">23kt Rose Gold</option>
                                    <option value="23kt">23kt White Gold</option>
                                    <option value="10kt">10kt Yellow Gold</option>
                                    <option value="15">Silver</option>
                                    <option value="15">1</option>
                                    <option value="15">2</option>
                                    
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="diamond">Select Diamond</label>
                                <select id="diamond" name="diamond" className="form-control">
                                    <option value="">Select Diamond</option>
                                    <option value="cz">CZ Diamond</option>
                                    <option value="original">Original Diamond</option>
                                    
                                    {/* Add options here */}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="pearl">Select Pearl</label>
                                <select id="pearl" name="pearl" className="form-control" disabled>
                                    <option value="">Select Pearl</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="colorstone">Select Colorstone</label>
                                <select id="colorstone" name="colorstone" className="form-control">
                                    <option value="">Select Colorstone</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                            <div className="form-group col-md-6 d-flex align-items-end">
                                <button type="button" className="btn btn-update btn-block">Update</button>
                            </div>
                        </div>
                        
                        <p className="sku text-left">SKU : CR0002</p>
                        <div className="row">
                            <div className="form-group col-md-12 d-flex justify-content-start">
                                <button type="button" className="btn btn-buy-now">Buy Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        

<div className="container-fluid mt-5 mb-7">
<div className="row align-items-center ">
    <div className="col-md-6">
    <table className="table">
        <tbody>
            <tr>
                <td>
                    <h3>Product Information</h3>
                </td>
            </tr>
            <tr>
                <td>SKU</td>
                <td>CR0002</td>
            </tr>
            <tr>
                <td>Info</td>
                <td>Width - 5.95 mm | Height - 8.87 mm</td>
            </tr>
            <tr>
                <td>Purity</td>
                <td>14kt Rose Gold</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>2.74 gm</td>
            </tr>
            <tr>
                <td>Diamond</td>
                <td>0.41 ct</td>
            </tr>
            <tr>
                <td>Size</td>
                <td>15</td>
            </tr>
            <tr>
                <td>Colorstone / Gemstone</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Pearl</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
        
    </div>
    <div className="col-md-6 d-flex justify-content-start">
     <table className="table">
         <tbody>
             <tr>
                 <td>
                     <h3>Price Break Up</h3>
                 </td>

             </tr>
             <tr>
                 <td>Metal Price</td>
                 <td>₹0</td>
             </tr>
             <tr>
                 <td>Diamond</td>
                 <td>₹0</td>
             </tr>
             <tr>
                 <td>Colorstone</td>
                 <td>₹0</td>
             </tr>
             <tr>
                 <td>Pearl</td>
                 <td>₹0</td>
             </tr>
             <tr>
                 <td>Making Charges</td>
                 <td>₹0</td>
             </tr>
             <tr>
                 <td>Export</td>
                 <td>₹0</td>
             </tr>
             <tr>
                 <td>Sub Total</td>
                 <td>₹0</td>
             </tr>
             <tr>
                 <td>GST</td>
                 <td>₹0</td>
             </tr>
             <tr>
                 <td>Grand Total</td>
                 <td>₹0</td>
             </tr>
         </tbody>
     </table>
 </div>
 </div>
 </div>

 <div class="container-fluid d-flex justify-content-center align-items-center">
    <div className="text-center">
    <button type="button" className="btn btn-primary">View More items</button>
    
    </div>
  </div>
  <div className="footer container-fluid">
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
