import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBRadio } from 'mdb-react-ui-kit';

function LoginForm() {


    return (

      <div>
    <MDBContainer>
      <MDBRow>
 
      <MDBInput label='Email' id='formControlLg' type='text' size='sm' />
      <br />
   
      <MDBInput label='Password' id='formControlDefault' type='text' size="sm" />
      <br />   
      </MDBRow>     
      <MDBRow>
        <MDBCol size='sm'>
        <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Remember Me' />
        </MDBCol>
        <MDBCol size='sm'>
          <p>Forgot Password</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        
      
    </div>

    );
}

export default LoginForm;
