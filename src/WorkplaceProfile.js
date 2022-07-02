import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import commentAvatar from './images/comment-avatar.png'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Button from 'bootstrap/js/dist/button.js';
import logoPlaceholder from './images/Rectangle 46.png'
import "chartjs-plugin-doughnut-innertext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import {
  BrowserRouter,
  Router,
  Route,
  Routes
} from "react-router-dom";
import UserNavbar from './UserNavbar';


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



function WorkplaceProfile() {


  return (

    <div>
    <UserNavbar></UserNavbar>
<MDBContainer>
  <MDBContainer className="d-flex justify-content-center">


<div className="d-flex align-items-center">
      <div className="p-2 w-20 flex-row-reverse"><img src={logoPlaceholder} alt="logo" /></div>
      <div className="p-2 flex-shrink-1 flex-row">
        <p className="compensation">Your Company Title and Logo</p>
        <p className="user-descriptor">Location, State, Country</p>
        <p className="years">0000 reported salaries</p>
      </div>
      <div className="flex-row flex-shrink-4" >
        
        <MDBCol>

        <Doughnut data={data} options={{
          // see all defaults / options below!
          maintainAspectRatio : false,
          cutout: 60,
          centerText: {
            color: "#6C757D",
            value: 9,
            fontSizeAdjust: 1 // increase font size 20% based on default font size
          }
        }}/>
        </MDBCol>
        <p className="years center-text">Equality Score</p>
      </div>
      
    </div>


 
   
  </MDBContainer>
</MDBContainer>

<Footer></Footer>
</div>

     


        


  



  );
}

export default WorkplaceProfile;
