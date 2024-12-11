import React, {useEffect} from 'react';
import Wrapper from "../components/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllDataRequest} from "../store/actions/allUsersDataActions";
import {Link} from "react-router-dom";

function ContactDirectory(props) {

    const dispatch = useDispatch();
    const {allData, error} = useSelector((state) => state.allData);

    useEffect(() => {
        dispatch(fetchAllDataRequest());
    }, [dispatch]);



    return (
        <Wrapper>
            <div className="main-container">
                
                <div className="page-header">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="title">
                                <h4>Contact Directory</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact Directory</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="contact-directory-list">
                    <ul className="row">
                        {allData.map(user => (
                            user.role === "manager" && (

                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={user._id}>
                                    <div className="contact-directory-box">
                                        <div className="contact-dire-info text-center">
                                            <div className="contact-avatar">
											<span>
												<img src="/images/photo2.jpg" alt=""/>
											</span>
                                            </div>
                                            <div className="contact-name">
                                                <h4>{user.fullName}</h4>
                                                <p>UI/UX designer</p>
                                                <div className="work text-success">
                                                    {user.role}
                                                </div>
                                            </div>
                                            <div className="contact-skill">
                                                <span className="badge badge-pill" style={{color: 'black'}}>UI</span>
                                                <span className="badge badge-pill" style={{color: 'black'}}>UX</span>
                                                <span className="badge badge-pill" style={{color: 'black'}}>Photoshop</span>
                                                <span className="badge badge-pill badge-primary">+ 8</span>
                                            </div>
                                            <div className="profile-sort-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                                            </div>
                                        </div>
                                        <div className="view-contact">
                                            <Link to="#">View Profile</Link>
                                        </div>
                                    </div>
                                </li>

                            )
                        ))}
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
}

export default ContactDirectory;