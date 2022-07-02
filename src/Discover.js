
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import UserNavbar from './UserNavbar.js';
import Footer from './Footer.js';
import logoPlaceholder from './images/Rectangle 46.png'
import Comments from './Comments.js';
import WorkplaceInfo from './WorkplaceInfo.js';

import { MDBContainer, MDBRow, MDBIcon, MDBCol } from 'mdb-react-ui-kit';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
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




function Discover() {


  return (

    <div className="App">
       <UserNavbar></UserNavbar>
      <header>
        <div className="content">

        {/* //comment section area */}

        <div className="comment-background">
        <MDBRow >
        <MDBCol className="comment-background">
         <h2>Workplace Reported Wages</h2>
         <button type="button" className="button-dark">Filter <MDBIcon icon='filter' fas /></button>
        </MDBCol>
      </MDBRow>

      <MDBRow className='d-flex justify-content-center'>
        <WorkplaceInfo></WorkplaceInfo>
        <hr></hr>
        <WorkplaceInfo></WorkplaceInfo>
        <hr></hr>
        <WorkplaceInfo></WorkplaceInfo>
        <hr></hr>
        <WorkplaceInfo></WorkplaceInfo>
      </MDBRow>

      <MDBCol className="d-flex justify-content-center">
<nav aria-label='...'>
      <MDBPagination size='sm' className='mb-0'>
        <MDBPaginationItem active>
          <MDBPaginationLink tag='span'>
            1<span className='visually-hidden'>(current)</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>2</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
    </MDBCol>
    
        </div>




        </div>
      </header>
      <Footer></Footer>
    </div>

  );
}

export default Discover;
