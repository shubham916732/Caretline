import React from 'react';

export default function Form3() {
  return (
    <div className="container">
      <form>
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="inputname" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="inputname" />
        </div>
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="inputemail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputemail4" placeholder="abc123@gmail.com" />
        </div>
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="inputnumber" className="form-label">Mobile Number</label>
          <input type="text" className="form-control" id="inputnumber" placeholder="0123456789" />
        </div>
        <div className="mb-3 col-12 col-md-6">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Flat no, Apartment, Street.."></textarea>
        </div>
        <div className="mb-3 col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              I Agree
            </label>
          </div>
        </div>
        <div className="mb-3 col-12">
          <button type="submit" className="btn btn-primary" style={{marginLeft:'100px'}}>Order now</button>
        </div>
      </form>
    </div>
  );
}
