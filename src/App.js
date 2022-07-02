import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'bootstrap/js/dist/button.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import LoginForm from './LoginForm.js';
import LogIn from './SignIn.js';
import SignIn from './SignIn.js';
import {
  BrowserRouter,
  Router,
  Route,
  Routes
} from "react-router-dom";
import { Link } from "react-router-dom";


function App() {


  return (

    <div className="App">
       <Navbar></Navbar>
      <header>
        <div className="content">

           <SignIn></SignIn>
        </div>
      </header>
      <Footer></Footer>
    </div>

  );
}

export default App;