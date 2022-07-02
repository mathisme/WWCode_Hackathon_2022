import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBRadio } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function LoginForm() {


    return (

      <div>
    <MDBContainer>
      <MDBRow>
 
      <MDBInput label='Email' id='formControlLg' type='text' />
      <br />
   
      <MDBInput label='Password' id='formControlDefault' type='text'  />
 
      </MDBRow>     
      <MDBRow>
        <MDBCol size='3' className='d-flex justify-content-end'>
        <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Remember Me' />
        </MDBCol>
        <MDBCol size='9' className='d-flex justify-content-end'>
        <MDBCol size='6'><Link to="#">Forgot Password?</Link></MDBCol>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        
      
    </div>

    );
}

export default LoginForm;
