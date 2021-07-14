import React, { useState } from 'react';
import './mainpage.css';
import img from '../images/img-1.jpg';
import {
    Link
  } from "react-router-dom";

const MainPage = () => 
{
    const [search,setSearch] = useState("Enter Your Email Address");

    const changeEvent = (input) =>
    {
        setSearch("");
        setSearch(input);
    }
    return (
        <div className="main__page" id="main">
            <div className="left__block">
                <Link to="#main" className="tryFree__block"> Try For Free Now! <i className="fas fa-chevron-right"></i> </Link>
                <h2>Set Your Bysiness Up <br /> With Modern Payroll, <br /> Benifits, And HR.</h2>
                <div className="email__block">
                    <span>@</span>
                    <input type="text" name="" value={search} onChange={(e) => changeEvent(e.target.value)}/>
                    <button>Get Satrted</button>
                </div>
                <div className="desc__block">
                    Our Plans wrer build to fit your unique needs. Streamline <br />
                    onbourding. benefits,payroll,PTO amd more with our <br />
                    simple intuitive platform.
                </div>

            </div>
            <div className="right__block">
                <div className="addEmployee__card">
                    <div className="addEmployee__title_block">
                        <h4>Add New Employee</h4>
                        <p> <i className="fas fa-search"></i> Inbox</p>
                    </div>
                    <div className="addEmployee__desc">
                        <img src={img} alt="" />
                        <div>
                        <h5>Jillian Wilde</h5>
                        <p>Full Time - les Angeles</p>
                        </div>
                    </div>
                </div>

                <div className="jobDetails__card">
                    <div className="jobDetails__title_block">
                        <h4>Job Details</h4>
                    </div>
                    <div className="jobDetails__content">
                        <tr>
                            <td>Job Title</td>
                            <td><p> <span>Class Instructur</span><i className="fas fa-check-circle"></i></p></td>
                        </tr> 
                        <tr>
                            <td>Departement</td>
                            <td><p> <span>Fitness Training</span><i className="fas fa-check-circle"></i></p></td>
                        </tr>
                        <tr>
                            <td>Work Location</td>
                            <td><p> <span> Los Angeles</span> <i className="fas fa-check-circle"></i></p></td>
                        </tr>
                        <tr>
                            <td>Classification</td>
                            <td><p><span>Independent Contractor</span> <i className="fas fa-check-circle"></i></p></td>
                        </tr>
                        <tr>
                            <td>Hire Date</td>
                            <td><p> <span>01/08/2020</span><i className="fas fa-check-circle"></i></p></td>
                        </tr>
                    </div>
                </div>
                <div className="employee__card">
                    <div className="employee__left">
                        <img src={img} alt="" />
                        <div className="employee__left_desc">
                            <h5>Adi Creation</h5>
                            <p>Job </p>
                            <span>145/hr</span>
                        </div>
                    </div>
                    <div className="employee__right">
                        <span>Total Pay</span>
                        <p className="price">$7558</p>
                        <p> <span>Paid</span><i className="fas fa-check-square"></i></p>
                    </div>
                </div>
                    <div className="plan__block">
                        <p>Select the best medical plan for you.</p>
                        <div className="plan__title_block">
                            <h3>Blur Cross <br /> PPO Direct 6k</h3>
                            <div></div>
                        </div>
                        <h3 className="plan_price">$644</h3>
                    </div>
            </div>

        </div>
    )
}

export default MainPage;
