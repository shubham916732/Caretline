import React, { useState,Redirect } from 'react';
import './Form.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    mobileNumber: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [redirect, setRedirect] = useState(false); // State to handle redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      alert(data.message); // Display success message
      window.location.href = '/'; // Set redirect to true after successful signup
    } catch (error) {
      console.error('Registration error:', error);
      alert('Failed to register user. Please try again.'); // Display error message
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Display success message
        window.location.href = '/'; // Set redirect to true after successful login
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid email or password.'); // Display error message
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }


  return (
    <div className='container-fluid bg-color'>
      <div className="container mb-7">
        <div className="row align-items-start">
          <div className="col-md-6 mt-1">
            <div className="card form">
              <h3 className="card-title text-center">Sign Up with Caretline</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="registerName">Enter Name:</label>
                  <input type="text" className="form-control" id="registerName" name="name" placeholder="Enter Name" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="registerEmail">Enter Email:</label>
                  <input type="email" className="form-control" id="registerEmail" name="email" placeholder="Enter Email" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="registerPassword">Enter Password:</label>
                  <input type="password" className="form-control" id="registerPassword" name="password" placeholder="Enter Password" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Select Gender:</label><br />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="genderMale" value="male" required onChange={handleChange} />
                    <label className="form-check-label" htmlFor="genderMale">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="female" required onChange={handleChange} />
                    <label className="form-check-label" htmlFor="genderFemale">Female</label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number:</label>
                  <input type="text" className="form-control" id="mobileNumber" name="mobileNumber" placeholder="Mobile Number" required onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-center mt-4 mb-4">
                  <button type="submit" className="btn btn-success">Register to Continue</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 mb-4 mt-1 align-items-end">
            <div className="card pt-0 form">
              <h3 className="card-title text-center">Login with Caretline</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="loginEmail">Enter Email:</label>
                  <input type="email" className="form-control" id="loginEmail" name="email" placeholder="Enter Email" required onChange={handleLoginChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Enter Password:</label>
                  <input type="password" className="form-control" id="loginPassword" name="password" placeholder="Enter Password" required onChange={handleLoginChange} />
                </div>
                <small className="form-text text-muted"><a href="#" className="forget">Forgot Password?</a></small>
                <div className="d-flex justify-content-center mt-4 mb-4">
                  <button type="submit" className="btn btn-success">Login to Continue</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
