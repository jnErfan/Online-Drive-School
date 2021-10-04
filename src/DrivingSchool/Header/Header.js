import "./Header.css"
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    // Active Style 
    const activeStyle = {
        backgroundColor: '#fff',
        color: '#000',
      }

    return (
        <div>
          
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container container-fluid">
         {/* Web Site Name  */}
                <div>
                <h1 className="text-white">e-Drive</h1>
                </div>
               <div>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navbar Control NevLinks  */}
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link navItems active" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link navItems active" aria-current="page" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link navItems active" aria-current="page" to="/contract">Contract</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link navItems active" aria-current="page" to="/about">About Us</NavLink>
                    </li>
                </ul>
                </div>
               </div>
    </div>
    </nav>
             
        </div>
    );
};

export default Header;