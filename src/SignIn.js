import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'bootstrap/js/dist/button.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import LoginForm from './LoginForm.js';
// import React, { useState } from 'react';
import { Link } from "react-router-dom";


function SignIn() {


  return (

    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Log in to your Account</h1>
        <p>Welcome back! Please enter your details.</p>
        <LoginForm></LoginForm>
        <button type="button" className="btn btn-primary"><Link to="/dashboard">Sign In</Link></button>

    </div>

  );
}

export default SignIn;
