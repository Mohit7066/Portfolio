import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
 
// import './CustomNavbar.css'; // Create this CSS file for styling

const CustomNavbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`fixed-top ${scrolling ? 'scroll' : 'notscroll'}`}>

      <Container>
        <NavLink to="/" className="nav1">
          MOHIT SUMAN
        </NavLink>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse className="justify-content-end" id="navbarSupportedContent">
          
          <ul className={`nav gap-5 text-decoration-none text-xl ${scrolling ? 'white-font' : 'dark-font'}`}>
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" className="nav-link">
                  Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeClassName="active" className="nav-link">
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/project" activeClassName="active" className="nav-link">
                  Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active" className="nav-link">
                  Contact
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
