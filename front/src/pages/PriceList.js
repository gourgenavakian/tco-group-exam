import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function PriceList(props) {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="col-md-7 mb-30">
                <h4 className="mb-30 mt-30 text-blue h4">Pricing Table</h4>
                <div className="row">

                    <div className="col-md-4 mb-30">
                        <div className="card-box pricing-card-style2">
                            <div className="pricing-card-header">
                                <div className="left">
                                    <h5>Standard</h5>
                                    <p>For small businesses</p>
                                </div>
                                <div className="right">
                                    <div className="pricing-price">
                                        €10<span>/month</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing-card-body">
                                <div className="pricing-points">
                                    <ul>
                                        <li><span>2 TB of space</span><FontAwesomeIcon icon={faCheck}
                                                                                       className="check-icon"/></li>
                                        <li><span>120 days of file recovery</span><FontAwesomeIcon icon={faCheck}
                                                                                                   className="check-icon"/>
                                        </li>
                                        <li><span>Smart Sync</span><FontAwesomeIcon icon={faCheck}
                                                                                    className="check-icon"/></li>
                                        <li><span>Dropbox Paper admin tools</span><FontAwesomeIcon icon={faCheck}
                                                                                                   className="check-icon"/>
                                        </li>
                                        <li><span>Granular sharing permissions</span><FontAwesomeIcon icon={faCheck}
                                                                                                      className="check-icon"/>
                                        </li>
                                        <li><span>User and company-managed groups</span><FontAwesomeIcon icon={faCheck}
                                                                                                         className="check-icon"/>
                                        </li>
                                        <li><span>Live chat support</span><FontAwesomeIcon icon={faCheck}
                                                                                           className="check-icon"/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cta">
                                <Link to="/users/registration" className="btn btn-primary btn-rounded btn-lg">Get Started</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PriceList;