import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Rings2.css';

export default function Rings7() {
    const [size, setSize] = useState('');
    const [metal, setMetal] = useState('');
    const [diamond, setDiamond] = useState('');
    const [weight, setWeight] = useState('');
    const [finalPrice, setFinalPrice] = useState('');
    const [isBuyButtonEnabled, setIsBuyButtonEnabled] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    const metalPrices = {
        '10kt_yellow': 2599,
        '10kt_white': 2599,
        '10kt_rose': 2599,
        '14kt_yellow': 3639,
        '14kt_white': 3639,
        '14kt_rose': 3639,
        '18kt_yellow': 4679,
        '18kt_white': 4679,
        '18kt_rose': 4679,
        '22kt_yellow': 6715,
        '22kt_white': 6715,
        '22kt_rose': 6715,
        '23kt_yellow': 5978,
        '23kt_white': 5978,
        '23kt_rose': 5978,
        '24kt_yellow': 7325,
        '24kt_white': 7325,
        '24kt_rose': 7325,
        'silver': 1000,
    };

    const diamondPrices = {
        'cz': 0,
        'original': 5000,
        'medium': 1250, // Assuming the price for the medium quality diamond
    };

    const handleInputChange = (event) => {
        const input = event.target.value;
        const value = parseFloat(input);
    
        // Check if the value is a number and greater than or equal to 5
        if (!isNaN(value) && value <= 0) {
            alert('Please select a minimum of 5 grams');
            setWeight('');
        } else {
            setWeight(input);
        }
    };

    const updatePrice = () => {

        if (!metal || !diamond || !weight) {
            alert('Please select all required fields.');
            return;
        }

        let price = 0;

        if (metalPrices[metal]) {
            price += metalPrices[metal] * parseFloat(weight || 0);
        }

        if (diamondPrices[diamond]) {
            price += diamondPrices[diamond];
        }
      
        setFinalPrice(price);
        setIsUpdated(true);
        setIsBuyButtonEnabled(size && metal && diamond && weight);
    };
    return (
        <div className="container-fluid mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://www.caretline.com/product/rings/Round%20Halo%20Solitaire%20Ring%201.png" className="d-block w-100" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.caretline.com/product/rings/Round%20Halo%20Solitaire%20Ring%202.png" className="second-slide w-100" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.caretline.com/product/rings/Round%20Halo%20Solitaire%20Ring%203.png" className="w-100" alt="Third slide"/>
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
                                <select id="size" name="size" className="form-control" value={size} onChange={(e) =>
                                    setSize(e.target.value)} required>
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
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="metal">Select Metal</label>
                                <select id="metal" name="metal" className="form-control" value={metal} onChange={(e) =>
                                    setMetal(e.target.value)} required>
                                    <option value="">Select Metal</option>
                                    <option value="10kt_yellow">10kt Yellow Gold</option>
                                    <option value="10kt_white">10kt White Gold</option>
                                    <option value="10kt_rose">10kt Rose Gold</option>
                                    <option value="14kt_yellow">14kt Yellow Gold</option>
                                    <option value="14kt_white">14kt White Gold</option>
                                    <option value="14kt_rose">14kt Rose Gold</option>
                                    <option value="18kt_yellow">18kt Yellow Gold</option>
                                    <option value="18kt_white">18kt White Gold</option>
                                    <option value="18kt_rose">18kt Rose Gold</option>
                                    <option value="22kt_yellow">22kt Yellow Gold</option>
                                    <option value="22kt_white">22kt White Gold</option>
                                    <option value="22kt_rose">22kt Rose Gold</option>
                                    <option value="23kt_yellow">23kt Yellow Gold</option>
                                    <option value="23kt_white">23kt White Gold</option>
                                    <option value="23kt_rose">23kt Rose Gold</option>
                                    <option value="24kt_yellow">24kt Yellow Gold</option>
                                    <option value="24kt_white">24kt White Gold</option>
                                    <option value="24kt_rose">24kt Rose Gold</option>
                                    <option value="silver">Silver</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="diamond">Select Diamond</label>
                                <select id="diamond" name="diamond" className="form-control" value={diamond} onChange={(e) =>
                                    setDiamond(e.target.value)} required>
                                    <option value="">Select Diamond</option>
                                    <option value="cz">CZ Diamond</option>
                                    <option value="original">Original Diamond</option>
                                    <option value="medium">Medium Diamond</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="weight">Weight</label>
                                <input type="text" className="form-control" id="inputnumber" placeholder="e.g. 5/gram"
                                    value={weight} onChange={handleInputChange} required />
                                    <p id='mini'><i>( minimum 5 gram ) </i></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="colorstone">Select Colorstone</label>
                                <select id="colorstone" name="colorstone" className="form-control" disabled>
                                    <option value="">Select Colorstone</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6 d-flex align-items-end">
                                <button type="button" className="btn btn-update btn-block" onClick={updatePrice}>Update</button>
                            </div>
                        </div>

                        <h2 className='mt-4'>₹ {finalPrice}</h2>
                        <h4 className="sku text-left mt-3">SKU : CR0002</h4>
                        <div className="row">
                            <div className="form-group col-md-12 d-flex justify-content-start">
                                {!isBuyButtonEnabled ? (
                                    <button type="button" className="btn btn-buy-now1" disabled>Buy Now</button>
                                ) : (
                                    <Link className="btn btn-buy-now1" to='/order'>Buy Now</Link>
                                )}
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
                <td>{setMetal}</td>
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
    );
}
