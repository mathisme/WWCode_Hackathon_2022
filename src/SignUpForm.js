import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBRadio } from 'mdb-react-ui-kit';

function SignUpForm() {


    return (

      <div>
    <MDBContainer>
      <MDBRow>
 
      <MDBInput label='Email' id='formControlLg' type='text' size='sm' />
      <br />
   
      <MDBInput label='Password' id='formControlDefault' type='text' size="sm" />
      <br />   
      <MDBInput label='Re-enter Password' id='formControlDefault' type='text' size="sm" />
      </MDBRow>     
      <MDBRow>
        <MDBCol size='sm'>
    
        </MDBCol>
        <MDBCol size='sm'>
        
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        
      
    </div>

    );
}

export default SignUpForm;
