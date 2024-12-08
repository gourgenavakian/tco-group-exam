import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import Select from "react-select";

function PageAddManager() {


    const userID = localStorage.getItem("userID");
    const [dynamicHeader, setDynamicHeader] = useState('Manager');

    const [info, setInfo] = useState({
        email: "",
        username: "",
        password: "",
        passportID: "",
        fullName: "",
        gender: "",
        country: "",
        city: "",
        role: "",
        createdBy: userID,
        managedUsers: [],
        createdAt: new Date().toISOString(),
        isActive: true
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}/users/registration`, {...info});
            console.log(response);

        }catch(err){
            console.log(err);
        }

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
                                        <h4>Add Manager</h4>
                                    </div>
                                    <nav aria-label="breadcrumb" role="navigation">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Add Manager
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border-radius-4 box-shadow mb-30">
                            <div className="pd-20">
                                <h5 className="text-center mb-4">{dynamicHeader} information</h5>
                                <form onSubmit={handleSubmit}>

                                    {/* Email */}
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                            Email*
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Email"
                                            value={info.email}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>

                                    {/* Username */}
                                    <div className="form-group">
                                        <label htmlFor="username">
                                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                                            Username*
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            id="username"
                                            placeholder="Enter Username"
                                            value={info.username}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            <FontAwesomeIcon icon={faLock} className="mr-2" />
                                            Password*
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter Password"
                                            value={info.password}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>


                                    {/* Full name */}
                                    <div className="form-group">
                                        <label htmlFor="fullName">
                                            Full name*
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-control"
                                            id="fullName"
                                            placeholder="Enter Full Name"
                                            value={info.fullName}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="passportID">
                                            Passport ID*
                                        </label>
                                        <input
                                            type="text"
                                            name="passportID"
                                            className="form-control"
                                            id="passportID"
                                            placeholder="Enter Full Name"
                                            value={info.passportID}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>

                                     {/*Gender*/}
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <Select
                                            options={[
                                                { value: 'male', label: 'Male' },
                                                { value: 'female', label: 'Female' }
                                            ]}
                                            onChange={(option) => {
                                                setInfo((prevInfo) => ({
                                                    ...prevInfo,
                                                    gender: option.value
                                                }));
                                            }}
                                        />
                                    </div>

                                    {/*Role*/}
                                    <div className="form-group">
                                        <label htmlFor="role">Role*</label>
                                        <Select
                                            options={[
                                                { value: 'manager', label: 'Manager' },
                                                { value: 'user', label: 'User' }
                                            ]}
                                            onChange={(option) => {
                                                setInfo((prevInfo) => ({
                                                    ...prevInfo,
                                                    role: option.value
                                                }));
                                                setDynamicHeader(option.label)
                                            }}/>
                                    </div>


                                    {/* Country */}
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <input
                                            type="text"
                                            name="country"
                                            className="form-control"
                                            id="country"
                                            placeholder="Enter Country"
                                            value={info.country}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* City */}
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            className="form-control"
                                            id="city"
                                            placeholder="Enter City"
                                            value={info.city}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <hr className="my-4" />
                                    <button type="submit" className="btn btn-success btn-block">
                                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
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

export default PageAddManager;
