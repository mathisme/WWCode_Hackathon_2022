import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'bootstrap/js/dist/button.js';
import Navbar from './Navbar.js';
import SignUpForm from './SignUpForm.js';
import Footer from './Footer.js';
import LoginForm from './LoginForm.js';


function SignUp() {


  return (

    <div className="App">
<Navbar></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Create an Account</h1>
        <p>Please enter your details.</p>
        <SignUpForm></SignUpForm>
        <button type="button" className="btn btn-primary">Primary</button>

    </div>

  );
}

export default SignUp;
