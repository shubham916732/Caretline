import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Rings.css'

export default function Rings() {
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const items = [
    { id: 'r1', image: 'https://www.caretline.com/product/rings/Classic%20Emerald%20Solitaire%20Ring%201.png', code: 'CR0002', price: 49024.14 },
    { id: 'r2', image: 'https://www.caretline.com/product/rings/Ruth%20Elegant%20Solitaire%20Ring%201.png', code: 'CR0003', price: 109125.41 },
    { id: 'r3', image: 'https://www.caretline.com/product/rings/Love%20Knot%20Solitaire%20Ring%201.png', code: 'CR0004', price: 52527.43 },
    { id: 'r4', image: 'https://www.caretline.com/product/rings/Pinnacle%20Solitaire%20Ring%201.png', code: 'CR0005', price: 55855.87 },
    { id: 'r5', image: 'https://www.caretline.com/product/rings/Floral%20Solitaire%20Ring%201.png', code: 'CR0006', price: 83335.38 },
    { id: 'r6', image: 'https://www.caretline.com/product/rings/Round%20Halo%20Solitaire%20Ring%201.png', code: 'CR0007', price: 67460.37 },
    { id: 'r7', image: 'https://www.caretline.com/product/rings/Charm%20Solitaire%20Ring%201.png', code: 'CR0008', price: 57907.12 },
    { id: 'r8', image: 'https://www.caretline.com/product/rings/Raina%20Solitaire%20Ring%201.png', code: 'CR0009', price: 34399.43 },
    { id: 'r9', image: 'https://www.caretline.com/product/rings/Zest%20Princess%20Solitaire%20Ring%201.png', code: 'CR0010', price: 53344.22 },
    { id: 'r10', image: 'https://www.caretline.com/product/rings/Liza%20Classic%20Solitaire%20Ring%201.png', code: 'CR0011', price: 60674.98 },
    { id: 'r11', image: 'https://www.caretline.com/product/rings/Lumia%20Bridal%20Ring%201.png', code: 'CR0012', price: 103597.14 },
    { id: 'r12', image: 'https://www.caretline.com/product/rings/Hamesha%20Studded%20Ring%201.png', code: 'CR0013', price: 51734.33 },
    { id: 'r13', image: 'https://www.caretline.com/product/rings/Glee%20Princess%20Solitaire%20Ring%201.png', code: 'CR0014', price: 72506.34 },
    { id: 'r14', image: 'https://www.caretline.com/product/rings/Dane%20Classic%20Solitaire%20Ring%201.png', code: 'CR0015', price: 70403.908 },
    { id: 'r15', image: 'https://www.caretline.com/product/rings/Orla%20Elegant%20Solitaire%20Ring%201.png', code: 'CR0016', price: 70707.44 },
    { id: 'r16', image: 'https://www.caretline.com/product/rings/Lesly%20Halo%20Solitaire%20Ring%201.png', code: 'CR0017', price: 59700.35 }
  ];

  const priceRanges = [
    { id: 'price1', label: '₹0 to ₹10,000', range: [0, 10000] },
    { id: 'price2', label: '₹10,000 to ₹25,000', range: [10000, 25000] },
    { id: 'price3', label: '₹25,000 to ₹30,000', range: [25000, 30000] },
    { id: 'price4', label: '₹30,000 to ₹50,000', range: [30000, 50000] },
    { id: 'price5', label: '₹50,000 to ₹80,000', range: [50000, 80000] },
    { id: 'price6', label: '₹80,000 to Above', range: [80000, Infinity] }
  ];

  const weightRanges = [
    { id: 'weight1', label: '0.01g to 0.50g', range: [0.01, 0.50] },
    { id: 'weight2', label: '0.51g to 1.00g', range: [0.51, 1.00] },
    { id: 'weight3', label: '1.01g to 1.50g', range: [1.01, 1.50] },
    { id: 'weight4', label: '1.51g to 2.00g', range: [1.51, 2.00] },
    { id: 'weight5', label: '2.01g to Above', range: [2.01, Infinity] }
  ];

  const handlePriceFilter = (range) => {
    setSelectedPriceRange(range);
  };

  const filteredItems = selectedPriceRange
    ? items.filter(item => item.price >= selectedPriceRange[0] && item.price <= selectedPriceRange[1])
    : items;

  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Note-</strong> This is not a final price please click the item and select all the field and see original price.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="view text-center">
          <h1 className="view">View All Items</h1>
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
              <ul className="drp dropdown-menu">
                {priceRanges.map((range) => (
                  <li className="li" key={range.id}>
                    <input type="radio" id={range.id} name="price" onChange={() => handlePriceFilter(range.range)} />
                    <label htmlFor={range.id}>
                      <a className="dropdown-item" href="#">{range.label}</a>
                    </label>
                  </li>
                ))}
                <li className="text-center pt-0">
                  <button className="filter btn" onClick={() => setSelectedPriceRange(null)}>Clear Filter</button>
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
          {filteredItems.map((item) => (
            <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
              <div className="card">
                <Link to={`/${item.id}`}>
                  <img src={item.image} className="card-img-top" alt={`Card Image ${item.id}`} />
                </Link>
              </div>
              <div className="price">
                <p className="mb-0">{item.code}</p>
                <p className="mb-0 ms-auto">₹ {item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h3>Customer Service</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="condition ml-9">Product Warranty</a></li>
              <li><a href="#" className="condition ml-9">Jewellery Care</a></li>
              <li><a href="#" className="condition ml-9">Shipping & Delivery</a></li>
              <li><a href="#" className="condition ml-9">Return & Exchange</a></li>
              <li><a href="#" className="condition ml-9">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
