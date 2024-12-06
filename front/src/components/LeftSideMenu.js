import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faDesktopAlt, faHouse, faMessage} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function LeftSideMenu(props) {
    return (
        <div className="left-side-bar">
            <div className="brand-logo">
                <Link to="/dash">
                    <img src="/images/deskapp-logo.svg" alt="" className="dark-logo"/>
                    <img src="/images/deskapp-logo-white.svg" alt="" className="light-logo"/>
                </Link>
                <div className="close-sidebar" data-toggle="left-sidebar-close">
                    <i className="ion-close-round"></i>
                </div>
            </div>
            <div className="menu-block customscroll">
                <div className="sidebar-menu">
                    <ul id="accordion-menu">
                        <li className="dropdown">
                            <Link to="/" className="dropdown-toggle">
                                    <span className="micon dw dw-house-1"><FontAwesomeIcon
                                        icon={faHouse}/><span> </span></span><span className="mtext">Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/chat" className="dropdown-toggle no-arrow">
                                <span className="micon dw dw-chat3"><FontAwesomeIcon icon={faMessage}/></span><span
                                className="mtext">Chat</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/profile" className="dropdown-toggle no-arrow">
                                    <span className="micon dw dw-invoice"><FontAwesomeIcon
                                        icon={faDesktopAlt}/></span><span className="mtext">Profile</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/add-user" className="dropdown-toggle no-arrow">
                                <span className="micon dw dw-invoice"><FontAwesomeIcon icon={faAdd}/></span><span
                                className="mtext">Add User</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LeftSideMenu;