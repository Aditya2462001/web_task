import React from 'react';
import './navbar.css';
import {
    Link
  } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2><Link to="#main">Tripupp HR</Link></h2>
            </div>
                <div className="menu">
                    <ul className="items">
                        <li className="item"><Link to="#">Home</Link></li>
                        <li className="item"><Link to="#">Payroll</Link></li>
                        <li className="item"><Link to="#">Benefits</Link></li>
                        <li className="item"><Link to="#">Pricing</Link></li>
                        <li className="item"><Link to="#">Work With Us</Link></li>
                    </ul>
                </div>
                <div className="signIn__block">
                    <Link to="#main">Sign In <i className="fas fa-chevron-right"></i> </Link>
                </div>
        </nav>
    )
}

export default Navbar;
