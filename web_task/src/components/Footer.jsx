import React from 'react';
import './footer.css';
import {
    Link
  } from "react-router-dom";
const Footer = () => 
{
    return (
        <div className="footer">
            <div className="getTeam__block">
                <h2>Get Your Team <br />
                Working With <br />
                Us!</h2>
                <Link to="#main">Get Started</Link>
            </div>
            <div className="footer__container">
                <div className="all-in-one_block">
                    <h2>All-in-one platform</h2>
                    <ul>
                        <li><Link to="#main"> Payroll </Link></li>
                        <li><Link to="#main"> Employee benefits </Link></li>
                        <li><Link to="#main"> Health insurance </Link></li>
                        <li><Link to="#main"> Financial Benefits </Link></li>
                        <li><Link to="#main"> Hiring and onbording </Link></li>
                        <li><Link to="#main"> Expert HR </Link></li>
                        <li><Link to="#main"> Time tracking  </Link></li>
                        <li><Link to="#main"> Worker's comp </Link></li>
                        <li><Link to="#main"> Integrations </Link></li>
                        <li><Link to="#main"> Gesto Wallet </Link></li>
                        <li><Link to="#main"> Gesto Partner Offers </Link></li>
                    </ul>

                </div>
                <div className="tools__block">
                    <h2>Tools</h2>
                    <ul>
                        <li><Link to="#main">Small Business Financial Relief</Link></li>
                        <li><Link to="#main">Employer taxt calculator</Link></li>
                        <li><Link to="#main">Burn rate calculator</Link></li>
                        <li><Link to="#main">Salary comparison tool</Link></li>
                        <li><Link to="#main">New hire checklist</Link></li>
                        <li><Link to="#main">Small business guides</Link></li>
                    </ul>
                    <div className="social__block">
                        <p>Social</p>
                        <div className="social__icons">
                             <i className="fab fa-facebook"></i>
                             <i className="fab fa-instagram-square"></i>
                             <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="contact__block">
                        <p>Contact</p>
                        <p>0012576469</p>
                    </div>

                </div>
                <div className="about__block">
                    <h2>About Gesto</h2>
                    <ul>
                        <li><Link to="#main">About</Link></li>
                        <li><Link to="#main">Career -- <span>We'ar hiring !</span></Link></li>
                        <li><Link to="#main">Press</Link></li>
                        <li><Link to="#main">Contact</Link></li>
                        <li><Link to="#main">Investor</Link></li>
                        <li><Link to="#main">Affiliate Program</Link></li>
                    </ul>

                </div>
            </div>


            
        </div>
    )
}

export default Footer;
