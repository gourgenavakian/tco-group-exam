import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope, faUserShield, faCamera, faCheck, faPersonThroughWindow}
    from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import '../assets/stylesheet/AddUser.css'
import Wrapper from "../components/Wrapper";


function PageAddUser() {
    return (
        <div >
            <Wrapper>
                <div className="main-container">

                    <div className="pd-ltr-20 xs-pd-20-10">
                        <div className="min-height-200px">
                            <div className="page-header">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="title">
                                            <h4>Add User</h4>
                                        </div>
                                        <nav aria-label="breadcrumb" role="navigation">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/dash">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page"><Link to="/add-user">Add User</Link></li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-radius-4 box-shadow mb-30">
                                <div className="pd-20">
                                    <h5 className="text-center mb-4">User Information</h5>
                                    <div className="text-center mb-4">
                                        <div className="avatar-upload">
                                            <label htmlFor="upload-avatar" className="btn btn-light btn-upload-avatar">
                                                <FontAwesomeIcon icon={faCamera}/> Upload Avatar
                                            </label>
                                            <input
                                                type="file"
                                                id="upload-avatar"
                                                style={{display: "none"}}
                                                accept="image/*"
                                            />
                                        </div>
                                        <p className="small text-muted mt-2">Supported formats: JPG, PNG</p>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="username">
                                                <FontAwesomeIcon icon={faUser} className="mr-2"/>
                                                Username
                                            </label>
                                            <input type="text" name='text' className="form-control" id="username"
                                                   placeholder="Enter username"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                                                Email
                                            </label>
                                            <input type="email" name='email' className="form-control" id="email"
                                                   placeholder="Enter email"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="role">
                                                <FontAwesomeIcon icon={faUserShield} className="mr-2"/>
                                                Role
                                            </label>
                                            <select className="form-control" id="role">
                                                <option>User</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="status">Status</label>
                                            <select className="form-control" id="status">
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="change-status-user">
                                                <FontAwesomeIcon icon={faPersonThroughWindow} className="mr-2"/>
                                                Change User Status
                                            </label>
                                            <select className="form-control" id="change-status-user">
                                                <option>Manager</option>
                                                <option>User</option>
                                            </select>
                                        </div>
                                        <hr className="my-4"/>
                                        <button type="submit" className="btn btn-success btn-block">
                                            <FontAwesomeIcon icon={faCheck}/>
                                            Save User
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default PageAddUser;

