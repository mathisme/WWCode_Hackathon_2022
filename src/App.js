import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'bootstrap/js/dist/button.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import LoginForm from './LoginForm.js';

function App() {


  return (

    <div className="App">
       <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<LoginForm></LoginForm>
        <button type="button" className="btn btn-primary">Primary</button>

      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
