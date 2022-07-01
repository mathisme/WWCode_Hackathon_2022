import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import commentAvatar from './images/comment-avatar.png'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Button from 'bootstrap/js/dist/button.js';
import {
  BrowserRouter,
  Router,
  Route,
  Routes
} from "react-router-dom";
import { Link } from "react-router-dom";


function Comment() {


  return (

    <MDBContainer className="d-flex justify-content-center">


<div className="d-flex">
      <div className="p-2 w-20 flex-row-reverse"><img src={commentAvatar} alt="logo" /></div>
      <div className="p-2 flex-shrink-1 flex-row">
        <p className="years">mm/yy | yyyy-yyyy</p>
        <p className="user-descriptor">Position Title | Gender</p>
        <p className="compensation">$00,000 | Year</p>
        <p className="company-descriptor">Coment text can be placed right here and this can be truncated if necessary.</p>
      </div>
    </div>

     </MDBContainer>

     


        


  



  );
}

export default Comment;
