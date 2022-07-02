
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import UserNavbar from './UserNavbar.js';
import Footer from './Footer.js';
import logoPlaceholder from './images/Rectangle 46.png'
import Comments from './Comments.js';
import MyComponent from './EmployeeInfo';

import { MDBContainer, MDBRow, MDBIcon, MDBCol } from 'mdb-react-ui-kit';
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


// establish donut chart
ChartJS.register(ArcElement);

export const data = {
  labels: [''],
  datasets: [
    {
      label: 'equality score',
      data: [9, 1],
      backgroundColor: [
        '#111344',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [''
      ],
      borderWidth: 0,
    },
  ],
  text: ''
};


function Dashboard() {


  return (

    <div className="App">
      
       <UserNavbar></UserNavbar>
      <header>
        <div className="content">


        <MDBRow center className="comment-background">

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


        <MDBContainer>


{/* donut chart analysis */}
        <MDBRow>
        <MDBCol >
          <h1 className='med-margin'>Your Workplace</h1>

                    {/* company logo and name */}
        <MDBRow center className="d-flex justify-content-center">

        <MDBCol size='3' className="d-flex justify-content-end">
        <img src={logoPlaceholder} alt="logo" />
        </MDBCol>
        <MDBCol size='3' className="d-flex justify-content-start">
        <p className="company-descriptor">Your Company Title and Logo</p>
        </MDBCol>

        </MDBRow>

          {/* donut chart information */}
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
        {/* //comment section area */}

        <div className="comment-background">
        <MDBRow >
        <MDBCol className="comment-background">
         <h2>Workplace Reported Wages</h2>
         <button type="button" className="button-dark">Filter <MDBIcon icon='filter' fas /></button>
        </MDBCol>
      </MDBRow>

      <MDBRow >
      <MyComponent></MyComponent>
        <Comments></Comments>
      </MDBRow>
        </div>

    


        </div>
      </header>
      <Footer></Footer>
    </div>

  );
}

export default Dashboard;
