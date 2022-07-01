import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'bootstrap/js/dist/button.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import logoPlaceholder from './images/Rectangle 46.png'
import LoginForm from './LoginForm.js';
import LogIn from './SignIn.js';
import SignIn from './SignIn.js';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "chartjs-plugin-doughnut-innertext";
import {
  BrowserRouter,
  Router,
  Route,
  Routes
} from "react-router-dom";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [9, 1],
      backgroundColor: [
        '#111344',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 0,
    },
  ],
  text: '23%'
};


function Dashboard() {


  return (

    <div className="App">
       <Navbar></Navbar>
      <header>
        <div className="content">

        <MDBContainer>

        <MDBRow center>
          <div className="d-flex flex-row justify-content-center dashboard-header">
          <MDBCol  size='6' >
            <MDBCol className='med-margin'>
            <img src={logoPlaceholder} alt="logo" />
            </MDBCol >
            <p>Compare Your Wage</p>
            </MDBCol>
            <MDBCol size='6'  >
              <MDBCol className='med-margin'>
              <img src={logoPlaceholder} alt="logo" />
              </MDBCol>
            <p>Report Your Wage</p>
            </MDBCol>
          </div>
        </MDBRow>

        <MDBRow center>
        <MDBCol  className='med-margin' >
          <div className="med-margin" width='100%'>
        <Doughnut data={data} options={{
          // see all defaults / options below!
          maintainAspectRatio : false,
          cutout: 60,
          centerText: {
            color: "#6C757D",
            value: 9,
            fontSizeAdjust: 2 // increase font size 20% based on default font size
          }
        }}/>
  
        </div>
        <p>Company Equality Score</p>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
        <div className="comment-background">
        <MDBRow className="comment-background">
        <MDBCol className="comment-background">
         <h2>Workplace Reported Wages</h2>
         <button type="button" className="btn btn-primary">Filter</button>
        </MDBCol>
      </MDBRow>
        </div>

    


        </div>
      </header>
      <Footer></Footer>
    </div>

  );
}

export default Dashboard;
