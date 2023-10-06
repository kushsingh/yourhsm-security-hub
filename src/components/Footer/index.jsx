import React from 'react';
import logo from '../../images/Logos-Photo.png';

import './footer.css';

const Footer = () => {
  return (
    <footer className='footer mt-auto pt-5'>
      <div className='container p-0'>
        <div className='footer-logo text-center position-relative'>
          <img
            src={logo}
            alt='Yourhsm Security hub'
          />
        </div>

        <div className='row m-0 py-5'>
          <div className='col-md-4 px-5'>
            <h3 className='text-end'>Services</h3>
            <ul className='text-end p-0 m-0'>
              <li>Secure Code</li>
              <li>Digital Signature</li>
              <li>Encryption</li>
              <li>Key/Data Vault Management</li>
            </ul>
          </div>

          <div className='col-md-4 px-5'>
            <h3 className='text-center'>Useful Links</h3>
            <ul className='text-center  p-0 m-0'>
              <li>About us</li>
              <li>Why us</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className='col-md-4 px-5'>
            <h3 className='text-start'>Get in Touch</h3>
            <ul className='text-start p-0 m-0'>
              <li>Sec 105, Noida</li>
              <li>+99 345 7681</li>
              <li>support@yourhsm.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copy-right text-center position-relative py-5'>
        © Copyright 2023. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
