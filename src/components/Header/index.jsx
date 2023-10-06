import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-yourhsm.png';

import './header.css';

const Header = () => {
  return (
    <>
      <header className='navbar navbar-expand-lg bd-navbar sticky-top py-2'>
        <nav className='container-xxl bd-gutter flex-wrap flex-lg-nowrap p-0'>
          <a
            className='navbar-brand logo navbar-brand logo p-0 m-0'
            href='/'
          >
            <img
              src={logo}
              alt='Yourhsm Security hub'
            />
          </a>

          <button
            className='navbar-toggler collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
          className='navbar-collapse collapse flex-grow-0'
            id='navbarCollapse'
          >
            <ul className='navbar-nav flex-row flex-wrap bd-navbar-nav'>
              <li className='nav-item col-12 col-lg-auto'>
                <NavLink
                  to='/'
                  className='nav-link py-2 px-0 px-lg-2'
                  activeclassname='active'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item col-12 col-lg-auto'>
                <NavLink
                  to='/AboutUs'
                  className='nav-link py-2 px-0 px-lg-2'
                >
                  About Us
                </NavLink>
              </li>
              <li className='nav-item col-12 col-lg-auto'>
                <NavLink
                  to='/WhyUs'
                  className='nav-link py-2 px-0 px-lg-2'
                >
                  Why Us
                </NavLink>
              </li>
              <li className='nav-item col-12 col-lg-auto'>
                <NavLink
                  to='/Services'
                  className='nav-link py-2 px-0 px-lg-2'
                >
                  Services
                </NavLink>
              </li>
              <li className='nav-item col-12 col-lg-auto'>
                <NavLink
                  to='/ContactUs'
                  className='nav-link py-2 px-0 px-lg-2'
                >
                  Contact US{' '}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
