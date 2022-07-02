import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Button from 'bootstrap/js/dist/button.js';
import Navbar from './Navbar.js';
import SignUpForm from './SignUpForm.js';
import logoPlaceholder from './images/Rectangle 46.png'
import Footer from './Footer.js';
import LoginForm from './LoginForm.js';


function SignUp() {


  return (

    <div className="App">
<Navbar></Navbar>
        <img src={logoPlaceholder} className='med-margin'  alt="logo" />
        <h1>Create an Account</h1>
        <p>Please enter your details.</p>
        <SignUpForm></SignUpForm>
        <Link to="/confirm"><button type="button" className="btn btn-primary med-margin">Submit</button></Link>
<Footer></Footer>
    </div>

  );
}

export default SignUp;