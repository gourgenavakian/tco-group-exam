import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import md5 from "md5";

function Login() {
    const [info, setInfo] = useState({
        role: "",
        username: "",
        password: '',
        remember: false,
    });

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info);
    }

    return (
        <div>
            <div className="login-page">
                <div className="login-header box-shadow">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="brand-logo">
                            <Link to="/login">
                                <img src="/images/deskapp-logo.svg" alt="Logo" />
                            </Link>
                        </div>
                        <div className="login-menu">
                            <ul>
                                <li>
                                    <Link to="/registration">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-7">
                                <img src="/images/login-page-img.png" alt="Login visual" />
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="login-box bg-white box-shadow border-radius-10">
                                    <div className="login-title">
                                        <h2 className="text-center text-primary">Login To DeskApp</h2>
                                    </div>
                                    <form>
                                        <div className="select-role">
                                            <div className="btn-group btn-group-toggle">
                                                <label className={`btn ${info.role === "manager" ? "active" : ""}`}>
                                                    <input
                                                        type="radio"
                                                        name="role"
                                                        value="manager"
                                                        onChange={onChange}
                                                        checked={info.role === "manager"}
                                                    />
                                                    <div className="icon">
                                                        <img src="/images/briefcase.svg" alt="Manager icon" />
                                                    </div>
                                                    <span>I'm</span> Manager
                                                </label>
                                                <label className={`btn ${info.role === "employee" ? "active" : ""}`}>
                                                    <input
                                                        type="radio"
                                                        name="role"
                                                        value="employee"
                                                        onChange={onChange}
                                                        checked={info.role === "employee"}
                                                    />
                                                    <div className="icon">
                                                        <img src="/images/person.svg" alt="Employee icon" />
                                                    </div>
                                                    <span>I'm</span> Employee
                                                </label>
                                            </div>
                                        </div>
                                        <div className="input-group custom">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Username"
                                                name="username"
                                                onChange={onChange}
                                                value={info.username}
                                            />
                                            <div className="input-group-append custom">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                                            </div>
                                        </div>
                                        <div className="input-group custom">
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control form-control-lg"
                                                placeholder="**********"
                                                onChange={onChange}
                                                value={info.password}
                                            />
                                            <div className="input-group-append custom">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faLock} />
                        </span>
                                            </div>
                                        </div>
                                        <div className="row pb-30">
                                            <div className="col-6">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck1"
                                                        name="remember"
                                                        onChange={onChange}
                                                        checked={info.remember}
                                                    />
                                                    <label className="custom-control-label" htmlFor="customCheck1">
                                                        Remember
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="forgot-password">
                                                    <Link to="/forgot-password">Forgot Password</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="input-group mb-0">
                                                    <Link className="btn btn-primary btn-lg btn-block" to="/dashboard" onClick={handleSubmit}>
                                                        Sign In
                                                    </Link>
                                                </div>
                                                <div
                                                    className="font-16 weight-600 pt-10 pb-10 text-center"
                                                    style={{ color: "#707373" }}
                                                >
                                                    OR
                                                </div>
                                                <div className="input-group mb-0">
                                                    <Link className="btn btn-outline-primary btn-lg btn-block" to="/registration">
                                                        Register To Create Account
                                                    </Link>
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
