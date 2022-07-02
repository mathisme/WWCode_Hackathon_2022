
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import avatar from './images/Avatar.png'
import logohome from './images/Rectangle 44.png'
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';


function UserNavbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar dark className="userbar" >
      <MDBContainer >
        <MDBNavbarBrand ><Link to="/dashboard"><img src={avatar} alt="profile image" /></Link></MDBNavbarBrand>

        {/* logo that links to homepage */}
        <Link to="/"><img src={logohome} alt="logo" /></Link>

        {/* hamburger icon */}
        <MDBNavbarToggler 
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink><Link to="/discover">Discover</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <label htmlFor='user-search' className='d-flex form-label light-text'>
        Search for other Workplaces
      </label>
        <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' id="user-search" placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'><MDBIcon icon='search' fas /></MDBBtn>
          </form>
          </MDBNavbarItem>


          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default UserNavbar;
