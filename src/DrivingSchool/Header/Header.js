import "./Header.css"
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const activeStyle = {
        backgroundColor: '#fff',
        color: '#000',
      }

    return (
        <div>
          
              <Navbar bg="dark" variant="dark">
    <Container >
        <div>
            <NavLink className="text-decoration-none me-4 fw-bold fs-2 text-white" to="/home">e-Drive</NavLink>
        </div>    

        <div>
            <Nav className="me-auto">
            <NavLink
             to="/home"
             activeStyle={activeStyle}
             className="navItems"
             >Home</NavLink>

            <NavLink
             to="/services"
             activeStyle={activeStyle}
             className="navItems"
             >Services</NavLink>

            <NavLink
             to="/contract"
             activeStyle={activeStyle}
             className="navItems"
             >Contract</NavLink>

            <NavLink
             to="/about"
             activeStyle={activeStyle}
             className="navItems"
             >About Us</NavLink>

            </Nav>
        </div>
    </Container>
                </Navbar>
        </div>
    );
};

export default Header;