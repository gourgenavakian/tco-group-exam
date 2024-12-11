import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faDesktopAlt, faHouse, faMessage, faUsers, faContactBook} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataRequest} from "../store/actions/profileDataActions";

function LeftSideMenu(props) {

    const dispatch = useDispatch();
    const { data, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchDataRequest());
    }, [dispatch]);

    return (
        <div className="left-side-bar">
            <div className="brand-logo">
                <Link to={`/home/${data.username}`}>
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
                            <Link to={`/home/${data.username}`} className="dropdown-toggle">
                                    <span className="micon dw dw-house-1"><FontAwesomeIcon
                                        icon={faHouse}/><span> </span></span><span className="mtext">Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={`/home/${data.username}/chat`} className="dropdown-toggle no-arrow">
                                <span className="micon dw dw-chat3"><FontAwesomeIcon icon={faMessage}/></span><span
                                className="mtext">Chat</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={`/home/${data.username}/profile`} className="dropdown-toggle no-arrow">
                                    <span className="micon dw dw-invoice"><FontAwesomeIcon
                                        icon={faDesktopAlt}/></span><span className="mtext">Profile</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={`/home/${data.username}/add-manager`} className="dropdown-toggle no-arrow">
                                <span className="micon dw dw-invoice"><FontAwesomeIcon icon={faAdd}/></span><span
                                className="mtext">Add Manager</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={`/home/${data.username}/users`} className="dropdown-toggle no-arrow">
                                <span className="micon dw dw-invoice"><FontAwesomeIcon icon={faUsers}/></span><span
                                className="mtext">Users</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={`/home/${data.username}/contact-directory`} className="dropdown-toggle no-arrow">
                                <span className="micon dw dw-invoice"><FontAwesomeIcon icon={faContactBook}/></span><span
                                className="mtext">Contact Directory</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LeftSideMenu;