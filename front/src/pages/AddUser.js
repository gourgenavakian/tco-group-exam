import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope, faUserShield, faCheck,}
from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Wrapper from "../components/Wrapper";

function PageAddUser() {
    const [info, setInfo] = useState({
        username: "",
        email: "",
        role: "User",
        status: "Inactive",
        changeStatus: "Manager",
    });

    const onChange = (e) => {
        const {name, value} = e.target;
        setInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info)
    };


    return (
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
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Add User
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border-radius-4 box-shadow mb-30">
                            <div className="pd-20">
                                <h5 className="text-center mb-4">User Information</h5>
                                <form onSubmit={handleSubmit}>
                                    {/* Username Input */}
                                    <div className="form-group">
                                        <label htmlFor="username">
                                            <FontAwesomeIcon icon={faUser} className="mr-2"/>
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            id="username"
                                            placeholder="Enter username"
                                            value={info.username}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            value={info.email}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Role Selection */}
                                    <div className="form-group">
                                        <label htmlFor="role">
                                            <FontAwesomeIcon icon={faUserShield} className="mr-2"/>
                                            Role
                                        </label>
                                        <select
                                            className="form-control"
                                            id="role"
                                            name="role"
                                            value={info.role}
                                            onChange={onChange}
                                        >
                                            <option value="User">User</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>

                                    {/* Status Selection */}
                                    <div className="form-group">
                                        <label htmlFor="status">Status</label>
                                        <select
                                            className="form-control"
                                            id="status"
                                            name="status"
                                            value={info.status}
                                            onChange={onChange}
                                        >
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>

                                    {/* Change Status */}
                                    <div className="form-group">
                                        <label htmlFor="changeStatus">Change User Status</label>
                                        <select
                                            className="form-control"
                                            id="changeStatus"
                                            name="changeStatus"
                                            value={info.changeStatus}
                                            onChange={onChange}
                                        >
                                            <option value="Manager">Manager</option>
                                            <option value="User">User</option>
                                        </select>
                                    </div>

                                    <hr className="my-4"/>
                                    <button type="submit" className="btn btn-success btn-block">
                                        <FontAwesomeIcon icon={faCheck} className="mr-2"/>
                                        Save User
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default PageAddUser;
