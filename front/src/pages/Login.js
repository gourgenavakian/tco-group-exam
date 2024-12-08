import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {useNavigate, Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataRequest} from "../store/actions/profileDataActions";

function Login(props) {

    const navigate = useNavigate();
    const location = useLocation();


    const [login, setLogin] = useState({
        username: "",
        password: "",
        role: "",
        remember: false,
    });

    const onChange = e => {

        const { name, value } = e.target;
        setLogin((prevLogin) => ({
            ...prevLogin,
            [name]: value
        }));

    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {

            if (login.role === "admin") {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}/users/admin/login`, {...login});

                const token = response.data.token;
                const admin = response.data.admin;

                localStorage.setItem('token', token);

                return navigate(`/home/${admin.username}`);
            }
            else if (login.role === "manager") {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}/users/manager/login`, {...login});

                const token = response.data.token;
                const manager = response.data.manager;

                localStorage.setItem('token', token);

                return navigate(`/home/${manager.username}`);
            }

        } catch (err) {
            console.error('Sign in error:', err);

        }
    };


    return (
        <div>
            <div className="login-page">
                <div className="login-header box-shadow">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="brand-logo">
                            <Link to="/login">
                                <img src="/images/deskapp-logo.svg" alt="Logo"/>
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
                                <img src="/images/login-page-img.png" alt="Login visual"/>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="login-box bg-white box-shadow border-radius-10">
                                    <div className="login-title">
                                        <h2 className="text-center text-primary">Login To DeskApp</h2>
                                    </div>
                                    <form>
                                        <div className="select-role">
                                            <div className="btn-group btn-group-toggle">
                                                <label className={`btn ${login.role === "manager" ? "active" : ""}`}>
                                                    <input
                                                        type="radio"
                                                        name="role"
                                                        value="manager"
                                                        onChange={onChange}
                                                        checked={login.role === "manager"}
                                                    />
                                                    <div className="icon">
                                                        <img src="/images/briefcase.svg" alt="Manager icon"/>
                                                    </div>
                                                    <span>I'm</span> Manager
                                                </label>
                                                <label className={`btn ${login.role === "admin" ? "active" : ""}`}>
                                                    <input
                                                        type="radio"
                                                        name="role"
                                                        value="admin"
                                                        onChange={onChange}
                                                        checked={login.role === "admin"}
                                                    />
                                                    <div className="icon">
                                                        <img src="/images/person.svg" alt="Employee icon"/>
                                                    </div>
                                                    <span>I'm</span> Admin
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
                                                value={login.username}
                                            />
                                            <div className="input-group-append custom">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser}/>
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
                                                value={login.password}
                                            />
                                            <div className="input-group-append custom">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock}/>
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
                                                        checked={login.remember}
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
                                                    <Link className="btn btn-primary btn-lg btn-block" to="/dashboard"
                                                          onClick={handleSubmit}>
                                                        Sign In
                                                    </Link>
                                                </div>
                                                <div
                                                    className="font-16 weight-600 pt-10 pb-10 text-center"
                                                    style={{color: "#707373"}}
                                                >
                                                    OR
                                                </div>
                                                <div className="input-group mb-0">
                                                    {
                                                        location.pathname.includes('admin') ?
                                                            <Link className="btn btn-outline-primary btn-lg btn-block"
                                                                  to="/registration">
                                                                Register To Create Account
                                                            </Link>
                                                            :
                                                            <Link className="btn btn-outline-primary btn-lg btn-block"
                                                                  to="/users/registration">
                                                                Join
                                                            </Link>
                                                    }
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