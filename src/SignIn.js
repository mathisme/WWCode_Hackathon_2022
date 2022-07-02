import logo from './logo.svg';
import logoPlaceholder from './images/Rectangle 46.png'
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import Button from 'bootstrap/js/dist/button.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import LoginForm from './LoginForm.js';
// import React, { useState } from 'react';
import { Link } from "react-router-dom";


function SignIn() {


  return (

    <div className="App">

<img src={logoPlaceholder} className='med-margin'  alt="logo" />
        <h1>Log in to your Account</h1>
        <p>Welcome back! Please enter your details.</p>
        <LoginForm></LoginForm>
        <MDBRow center className="med-margin d-flex align-self-center justify-content-center">
        <MDBCol size='3' className="med-margin"> <Link to="/dashboard"><button type="button" className="btn btn-primary">Sign In</button></Link></MDBCol>
        <Link className="med-margin" to="/SignUp">Don't have an account? Sign up</Link>
       </MDBRow>

       


    </div>

  );
}

export default SignIn;
