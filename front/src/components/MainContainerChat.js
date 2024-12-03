import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faPaperPlane, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function MainContainerChat(props) {
    return (

        <div className="main-container">
            <div className="pd-ltr-20 xs-pd-20-10">
                <div className="min-height-200px">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="title">
                                    <h4>Chat</h4>
                                </div>
                                <nav aria-label="breadcrumb" role="navigation">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/" data-discover="true">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page"><Link to="/chat"
                                                                                                      data-discover="true">Chat</Link>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border-radius-4 box-shadow mb-30">
                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="chat-list bg-light-gray">
                                    <div className="chat-search">
                                            <span className="ti-search">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </span>
                                        <input type="text" placeholder="Search Contact"/>
                                    </div>
                                    <div className="notification-list chat-notification-list customscroll"
                                         style={{overflowY: 'auto'}}>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-light-green"></i> online</p>
                                                </Link>
                                            </li>
                                            <li className="active">
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-light-green"></i> online</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-light-green"></i> online</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-warning"></i> active 5 min
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-warning"></i> active 4 min
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-warning"></i> active 3 min
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-light-orange"></i> offline
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-light-orange"></i> offline
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-light-orange"></i> offline
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-light-orange"></i> offline
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-light-orange"></i> offline
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img src="/images/img.jpg" alt=""/>
                                                    <h3 className="clearfix">John Doe</h3>
                                                    <p><i className="fa fa-circle text-light-orange"></i> offline
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-12">
                                <div className="chat-detail">
                                    <div className="chat-profile-header clearfix">
                                        <div className="left">
                                            <div className="clearfix">
                                                <div className="chat-profile-photo">
                                                    <img src="/images/profile-photo.jpg" alt=""/>
                                                </div>
                                                <div className="chat-profile-name">
                                                    <h3>Rachel Curtis</h3>
                                                    <span>New York, USA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right text-right">
                                            <div className="dropdown">
                                                <Link className="btn btn-outline-primary dropdown-toggle" to="#"
                                                      role="button" data-toggle="dropdown">
                                                    Setting
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="#">Export Chat</Link>
                                                    <Link className="dropdown-item" to="#">Search</Link>
                                                    <Link className="dropdown-item text-light-orange" to="#">Delete Chat</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-box" style={{ display: 'flex', flexDirection:'column'}}>
                                        <div className="chat-desc customscroll" style={{overflowY:'auto',}}>
                                            <ul>
                                                <li className="clearfix admin_chat">
												<span className="chat-img">
													<img src="/images/chat-img2.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix">
                                                        <p>Maybe you already have additional info?</p>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                                <li className="clearfix admin_chat">
												<span className="chat-img">
													<img src="/images/chat-img2.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix">
                                                        <p>It is to early to provide some kind of estimation here.
                                                            We need user stories.</p>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
												<span className="chat-img">
													<img src="/images/chat-img1.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix">
                                                        <p>We are just writing up the user stories now so will have
                                                            requirements for you next week. We are just writing up
                                                            the user stories now so will have requirements for you
                                                            next week.</p>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
												<span className="chat-img">
													<img src="/images/chat-img1.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix">
                                                        <p>Essentially the brief is for you guys to build an iOS and
                                                            android app. We will do backend and web app. We have a
                                                            version one mockup of the UI, please see it attached. As
                                                            mentioned before, we would simply hand you all the
                                                            assets for the UI and you guys code. If you have any
                                                            early questions please do send them on to myself. Ill be
                                                            in touch in coming days when we have requirements
                                                            prepared. Essentially the brief is for you guys to build
                                                            an iOS and android app. We will do backend and web app.
                                                            We have a version one mockup of the UI, please see it
                                                            attached. As mentioned before, we would simply hand you
                                                            all the assets for the UI and you guys code. If you have
                                                            any early questions please do send them on to myself.
                                                            Ill be in touch in coming days when we have.</p>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                                <li className="clearfix admin_chat">
												<span className="chat-img">
													<img src="/images/chat-img2.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix">
                                                        <p>Maybe you already have additional info?</p>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                                <li className="clearfix admin_chat">
												<span className="chat-img">
													<img src="/images/chat-img2.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix">
                                                        <p>It is to early to provide some kind of estimation here.
                                                            We need user stories.</p>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
												<span className="chat-img">
													<img src="/images/chat-img1.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix">
                                                        <p>We are just writing up the user stories now so will have
                                                            requirements for you next week. We are just writing up
                                                            the user stories now so will have requirements for you
                                                            next week.</p>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
												<span className="chat-img">
													<img src="/images/chat-img1.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix">
                                                        <p>Essentially the brief is for you guys to build an iOS and
                                                            android app. We will do backend and web app. We have a
                                                            version one mockup of the UI, please see it attached. As
                                                            mentioned before, we would simply hand you all the
                                                            assets for the UI and you guys code. If you have any
                                                            early questions please do send them on to myself. Ill be
                                                            in touch in coming days when we have requirements
                                                            prepared. Essentially the brief is for you guys to build
                                                            an iOS and android app. We will do backend and web app.
                                                            We have a version one mockup of the UI, please see it
                                                            attached. As mentioned before, we would simply hand you
                                                            all the assets for the UI and you guys code. If you have
                                                            any early questions please do send them on to myself.
                                                            Ill be in touch in coming days when we have.</p>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                                <li className="clearfix upload-file">
												<span className="chat-img">
													<img src="/images/chat-img1.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix" >
                                                        <div className="upload-file-box clearfix" >
                                                            <div className="left">
                                                                <img src="/images/upload-file-img.jpg" alt=""/>
                                                                <div className="overlay">
                                                                    <Link to="#">
                                                                            <span><i
                                                                                className="fa fa-angle-down"></i></span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <h3>Big room.jpg</h3>
                                                                <Link to="#">Download</Link>
                                                            </div>
                                                        </div>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                                <li className="clearfix upload-file admin_chat">
												<span className="chat-img">
													<img src="/images/chat-img2.jpg" alt=""/>
												</span>
                                                    <div className="chat-body clearfix">
                                                        <div className="upload-file-box clearfix">
                                                            <div className="left">
                                                                <img src="/images/upload-file-img.jpg" alt=""/>
                                                                <div className="overlay">
                                                                    <Link to="#">
                                                                            <span><i
                                                                                className="fa fa-angle-down"></i></span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <h3>Big room.jpg</h3>
                                                                <Link to="#">Download</Link>
                                                            </div>
                                                        </div>
                                                        <div className="chat_time">09:40PM</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="chat-footer" style={{display: 'flex', alignItems: 'center', width: '100%'}}>

                                            <div className="file-upload" ><Link to="#">
                                                <FontAwesomeIcon icon={faPaperclip} className="fa fa-paperclip"/>

                                            </Link></div>


                                            <div className="chat_text_area" >
                                                <textarea placeholder="Type your message…"></textarea>
                                            </div>

                                            <div className="chat_send">
                                                <button className="btn btn-link" type="submit">
                                                    <FontAwesomeIcon icon={faPaperPlane}/>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default MainContainerChat;