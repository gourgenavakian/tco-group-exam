import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown, faBell, faGear, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequest } from "../store/actions/profileDataActions";

function Header(props) {

    const dispatch = useDispatch();
    const { data, error } = useSelector((state) => state.data);

    const [showDropDownMenu, setShowDropDownMenu] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        dispatch(fetchDataRequest());
    }, [dispatch]);

    return (

        <div className="header">
            <div className="header-left">
                <div className="menu-icon dw dw-menu"></div>
                <div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
                <div className="header-search">
                    <form>
                        <div className="form-group mb-0">
                            <FontAwesomeIcon className='dw dw-search2 search-icon' icon={faSearch}/>
                            <input type="text" className="form-control search-input" placeholder="Search Here"/>
                            <div className="dropdown">
                                <Link className="dropdown-toggle no-arrow" to="#" role="button"
                                   data-toggle="dropdown">
                                    <FontAwesomeIcon className='ion-arrow-down-c' icon={faArrowAltCircleDown}/>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-md-2 col-form-label">From</label>
                                        <div className="col-sm-12 col-md-10">
                                            <input className="form-control form-control-sm form-control-line"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-md-2 col-form-label">To</label>
                                        <div className="col-sm-12 col-md-10">
                                            <input className="form-control form-control-sm form-control-line"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-md-2 col-form-label">Subject</label>
                                        <div className="col-sm-12 col-md-10">
                                            <input className="form-control form-control-sm form-control-line"
                                                   type="text"/>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <button className="btn btn-primary">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="header-right">
                <div className="dashboard-setting user-notification">
                    <div className="dropdown">
                        <Link className="dropdown-toggle no-arrow" to="#" data-toggle="right-sidebar">
                            <FontAwesomeIcon icon={faGear} className='dw dw-settings2'/>
                        </Link>
                    </div>
                </div>
                <div className="user-notification">
                    <div className="dropdown">
                        <Link className="dropdown-toggle no-arrow"
                              to="#"
                              role="button"
                              data-toggle="dropdown" onClick={() => setShowNotification(!showNotification)}>

                            <FontAwesomeIcon className="icon-copy dw dw-notification" icon={faBell}/>
                            <span className="badge notification-active"></span>
                        </Link>
                        { showNotification && <div className="dropdown-menu dropdown-menu-right" style={{display: 'block', overflowY: 'auto'}}>
                            <div className="notification-list mx-h-350 customscroll">
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <img src="/images/img.jpg" alt=""/>
                                            <h3>John Doe</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed...</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="/images/photo1.jpg" alt=""/>
                                            <h3>Lea R. Frith</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed...</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="/images/photo2.jpg" alt=""/>
                                            <h3>Erik L. Richards</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed...</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="/images/photo3.jpg" alt=""/>
                                            <h3>John Doe</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed...</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="/images/photo4.jpg" alt=""/>
                                            <h3>Renee I. Hansen</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed...</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="/images/img.jpg" alt=""/>
                                            <h3>Vicki M. Coleman</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed...</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="user-info-dropdown">
                    <div className="dropdown">
                        <Link className="dropdown-toggle"
                              to="#" role="button"
                              data-toggle="dropdown"
                              onClick={() => setShowDropDownMenu(!showDropDownMenu)}>
						<span className="user-icon">
							<img src="/images/photo1.jpg" alt=""/>
						</span>
                            <span className="user-name">{data.fullName}</span>
                        </Link>
                        { showDropDownMenu && <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list" style={{display: 'block'}}>
                            <Link className="dropdown-item" to="profile.html"><i
                                className="dw dw-user1"></i> Profile</Link>
                            <Link className="dropdown-item" to="profile.html"><i
                                className="dw dw-settings2"></i> Setting</Link>
                            <Link className="dropdown-item" to="faq.html"><i className="dw dw-help"></i> Help</Link>
                            <Link className="dropdown-item" to="login.html"><i className="dw dw-logout"></i> Log
                                Out</Link>
                        </div>}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Header;