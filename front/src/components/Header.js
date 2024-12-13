import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown, faBell, faGear, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequest } from "../store/actions/profileDataActions";
import {fetchAllDataRequest} from "../store/actions/allUsersDataActions";
import {markAllAsRead} from "../store/actions/notificationActions";

function Header() {

    const dispatch = useDispatch();
    const { data, error } = useSelector((state) => state.data);
    const { allData } = useSelector((state) => state.allData);
    const { notifications, unreadCount } = useSelector((state) => state.notifications);

    const [showDropDownMenu, setShowDropDownMenu] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        dispatch(fetchDataRequest());
        dispatch(fetchAllDataRequest());
    }, [dispatch, notifications]);

    const handleMarkAsRead = () => {
        setShowNotification(!showNotification);
        setTimeout(() => {
            dispatch(markAllAsRead());
        }, 2000)
    };

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
                              data-toggle="dropdown" onClick={handleMarkAsRead}>

                            <FontAwesomeIcon className="icon-copy dw dw-notification" icon={faBell}/>
                            <span className="badge notification-active" style={{width: '15px', height: '15px'}}>({unreadCount}</span>


                        </Link>
                        {showNotification && <div className="dropdown-menu dropdown-menu-right"
                                                  style={{display: 'block', overflowY: 'auto'}}>
                            <div className="notification-list mx-h-350 customscroll">
                                <ul>
                                    {/*{allData.map(item => (*/}
                                    {/*    <li>*/}
                                    {/*        <Link to="#">*/}
                                    {/*            <img src={item?.avatar || '/images/avatar.avif'} alt=""/>*/}
                                    {/*            <h3>{item.fullName}</h3>*/}
                                    {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,*/}
                                    {/*                sed...</p>*/}
                                    {/*        </Link>*/}
                                    {/*    </li>*/}
                                    {/*))*/}
                                    {/*}*/}
                                    {notifications.map((notification) => (
                                    <li key={notification.id} style={{ fontWeight: notification.read ? 'normal' : 'bold' }}>
                                        <Link to="#">
                                            <img src={notification.user?.avatar || '/images/avatar.avif'} alt=""/>
                                            <h3>{notification.user.name}</h3>
                                            <p>{notification.message}</p>
                                        </Link>
                                    </li>
                                    ))}
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
							<img src={data?.avatar || '/images/avatar.avif'} alt=""/>
						</span>
                            <span className="user-name">{data.fullName}</span>
                        </Link>
                        { showDropDownMenu && <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list" style={{display: 'block'}}>
                            <Link className="dropdown-item" to={`/home/${data.username}/profile`}><i
                                className="dw dw-user1"></i> Profile</Link>
                            <Link className="dropdown-item" to={`/home/${data.username}/profile`}><i
                                className="dw dw-settings2"></i> Setting</Link>
                            <Link className="dropdown-item" to="/faq"><i className="dw dw-help"></i> Help</Link>
                            <Link className="dropdown-item" to="/login" onClick={() => localStorage.removeItem('token')}> Log
                                Out</Link>
                        </div>}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;