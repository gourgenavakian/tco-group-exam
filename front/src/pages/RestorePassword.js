import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

function RestorePassword() {

    const [token, setToken] = useState('');

    const handleChange = e => setToken(e.target.value);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8088/users/restore-password', {token: token});
            console.log(response);
        }catch (e) {
            console.error(e);
        }

    }

    return (
        <div>	<div className="login-header box-shadow">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="brand-logo">
                    <Link to="#">
                        <img src="/images/deskapp-logo.svg" alt=""/>
                    </Link>
                </div>
                <div className="login-menu">
                    <ul>
                        <li><Link to="#">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
            <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src="/images/forgot-password.png" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="login-box bg-white box-shadow border-radius-10">
                                <div className="login-title">
                                    <h2 className="text-center text-primary">Forgot Password</h2>
                                </div>
                                <h6 className="mb-20">Enter your email address to reset your password</h6>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group custom">
                                        <input type="text" className="form-control form-control-lg" placeholder="Token" onChange={handleChange} />
                                        <div className="input-group-append custom">
                                            <span className="input-group-text"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-5">
                                            <div className="input-group mb-0">
                                                <input className="btn btn-primary btn-lg btn-block" type="submit" value="Submit"/>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="font-16 weight-600 text-center" data-color="#707373">OR</div>
                                        </div>
                                        <div className="col-5">
                                            <div className="input-group mb-0">
                                                <Link className="btn btn-outline-primary btn-lg btn-block" to="/login">Login</Link>
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
    )
}

export default RestorePassword;