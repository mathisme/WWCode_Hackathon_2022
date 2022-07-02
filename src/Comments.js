import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Comment from './Comment.js';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
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


function Comments() {


  return (

    <MDBContainer className="d-flex justify-content-center flex-column">

<MDBCol>
  
  {/* we'll have to map the comment with the data i'll need to look into this more once we have data */}
  <Comment></Comment>
  
  </MDBCol>

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
     </MDBContainer>

     


        


  



  );
}

export default Comments;
