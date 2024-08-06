import React from 'react';
import './Carousel.css';

export default function Carousel() {
  
  return (
    <div className='carousel'>
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade"  data-bs-ride="carousel" data-bs-interval="1000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.caretline.com/images/banner_1.jpg" className="d-block w-100" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img src="https://www.caretline.com/images/banner_4.jpg" className="d-block " alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img src="https://www.caretline.com/images/banner_2.png" className="d-block" alt="Third slide"/>
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
  );
}
