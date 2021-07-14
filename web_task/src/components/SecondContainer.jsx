import React from 'react';
import './secondcontainer.css';
import img from '../images/img-1.jpg';

const SecondContainer = () => {
    return (
        <div className="second__container">
            <div className="secondcontainer_icon">
              <i className="far fa-user"></i>
            </div>
            <div className="second__left_block">
                <h2><span>HR</span> Manage your people with ease.</h2>
                <div className="add_candidate_block">
                    <div className="addcandidate_title">
                       <h3>Add a Candidate</h3> 
                    </div>
                    <div className="addcandidate_pres">

                        <div className="addcandidate_pre">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="addcandidate_pre">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="addcandidate_pre">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="addcandidate_pre">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="addcandidate_second_title">
                      <p>Review your offer letter for jillian Wilde</p>  
                    </div>
                    <div className="addcandidate_pre2">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="addcandidate__details_block">
                        <h3 className="addcandidate__details_block_title">Dear Jillian Wilde,</h3>
                        <div className="addcandidate__details_bottom">
                            <div className="details__left">
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>

                            </div>
                            <div className="details__right">
                                <div>
                                    <p>Position</p>
                                    <h4>Manager</h4>
                                </div>
                                <div>
                                    <p>Salary</p>
                                    <h4>$999.00 Per Week</h4>
                                </div>
                                <div>
                                    <p>Joining Date</p>
                                    <h4>August 01,2021</h4>
                                </div>
                                <div>
                                    <p>Employer</p>
                                    <h4>Rosa Amador</h4>
                                </div>
                                <div className="details__button">
                                    <button>Send Offer</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="second__right_block">
            <div className="second__jobDetails__card">
                    <div className="second__jobDetails__title_block">
                        <h4>Job Details</h4>
                    </div>
                    <div className="second__jobDetails__content">
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
                <div className="employee__directory_blcok">
                    <div className="employee__directory__title">
                        <h3>Employee Directory</h3>
                        <p>Show All</p>
                    </div>
                    <div className="employee__directories">
                        <div className="employee_dir">
                            <img src={img} alt="" />
                            <h4>Adi Creation</h4>
                            <p>Software Engineer</p>
                            <span>Full-Time</span>
                            <span>San Francisio</span>
                        </div>
                        <div className="employee_dir">
                            <img src={img} alt="" />
                            <h4>Adi Creation</h4>
                            <p>Software Engineer</p>
                            <span>Full-Time</span>
                            <span>San Francisio</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondContainer;
