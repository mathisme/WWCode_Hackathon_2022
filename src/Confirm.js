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


function Confirm() {


  return (

    <div className="App">
<Navbar></Navbar>
        <img src={logoPlaceholder} className='med-margin'  alt="logo" />
        <h1>Thank you!</h1>
        <p>Please confirm your email.</p>
        <Link to="#"><button type="button" className="btn btn-primary med-margin">Rsend Confirmation Email</button></Link>
<Footer></Footer>
    </div>

  );
}

export default Confirm;
