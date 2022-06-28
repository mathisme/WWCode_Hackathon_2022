import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

function LoginForm() {


    return (

      <div>
      <MDBInput label='Username' id='formControlLg' type='text' size='sm' />
      <br />
      <MDBInput label='Password' id='formControlDefault' type='text' size="sm" />

    </div>

    );
}

export default LoginForm;
