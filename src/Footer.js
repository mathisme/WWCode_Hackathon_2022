import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {


  return (
    <MDBFooter className='text-center text-lg-start text-muted footer-bg'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block light-text'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset light-text'>
            <i className='fab fa-facebook-f light-text'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter light-text'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram light-text'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin light-text'></i>
          </a>
        </div>
      </section>

      <section className='light-text'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Learn More</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Discover
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Invite
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;