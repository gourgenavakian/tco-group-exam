import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";

function Login(props) {
    return (
        <div>
            <div className="login-page">
                <div className="login-header box-shadow">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="brand-logo">
                            <a href="login.html">
                                <img src="/images/deskapp-logo.svg" alt=""/>
                            </a>
                        </div>
                        <div className="login-menu">
                            <ul>
                                <li><a href="register.html">Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-7">
                                <img src="/images/login-page-img.png" alt=""/>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="login-box bg-white box-shadow border-radius-10">
                                    <div className="login-title">
                                        <h2 className="text-center text-primary">Login To DeskApp</h2>
                                    </div>
                                    <form>
                                        <div className="select-role">
                                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label className="btn">
                                                    <input type="radio" name="options" id="admin"/>
                                                    <div className="icon"><img src="/images/briefcase.svg"
                                                                               className="svg" alt=""/></div>
                                                    <span>I'm</span>
                                                    Manager
                                                </label>
                                                <label className="btn">
                                                    <input type="radio" name="options" id="user"/>
                                                    <div className="icon"><img src="/images/person.svg" className="svg"
                                                                               alt=""/></div>
                                                    <span>I'm</span>
                                                    Employee
                                                </label>
                                            </div>
                                        </div>
                                        <div className="input-group custom">
                                            <input type="text" className="form-control form-control-lg"
                                                   placeholder="Username"/>
                                            <div className="input-group-append custom">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faUser}
                                                                                            className="icon-copy dw dw-user1"></FontAwesomeIcon></span>
                                            </div>
                                        </div>
                                        <div className="input-group custom">
                                            <input type="password" className="form-control form-control-lg"
                                                   placeholder="**********"/>
                                            <div className="input-group-append custom">
                                                <span className="input-group-text"><FontAwesomeIcon icon={faLock}
                                                                                                    className="dw dw-padlock1"></FontAwesomeIcon></span>
                                            </div>
                                        </div>
                                        <div className="row pb-30">
                                            <div className="col-6">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck1"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="customCheck1">Remember</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="forgot-password"><a href="forgot-password.html">Forgot
                                                    Password</a></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="input-group mb-0">
                                                    <a className="btn btn-primary btn-lg btn-block" href="index.html">Sign
                                                        In</a>
                                                </div>
                                                <div className="font-16 weight-600 pt-10 pb-10 text-center"
                                                     data-color="#707373"
                                                     style={{color: 'rgb(112, 115, 115)'}}>OR
                                                </div>
                                                <div className="input-group mb-0">
                                                    <a className="btn btn-outline-primary btn-lg btn-block"
                                                       href="register.html">Register To Create Account</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;