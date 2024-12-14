import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Select from "react-select";
import useLocalStorage from "../helpers/useLocalStorage";
import {useDispatch, useSelector} from "react-redux";
import {registerUserRequest} from "../store/actions/registerUsersActions";
import {fetchProductsDataRequest} from "../store/actions/productsDataActions";


function PageAddUser() {


    const dispatch = useDispatch();
    const {productsData, error, loading} = useSelector(state => state.productsData);
    const [, getUserID] = useLocalStorage("userID");
    const [dynamicHeader, setDynamicHeader] = useState('User');

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
        createdBy: getUserID(),
        referralsUsername: "",
        managedUsers: [],
        productId: '',
        quantity: 1,
        createdAt: new Date().toISOString(),
        isActive: true,
        goals: {
            users: 0,
            income: 0,
        },
        salary: 0
    });

    const onChange = (e) => {
        const {name, value} = e.target;
        if (name === "users" || name === "income") {
            setInfo((prev) => ({
                ...prev,
                goals: {
                    ...prev.goals,
                    [name]: value,
                }
            }))
        }
        setInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setInfo((prev) => ({
            ...prev,
            createdBy: getUserID(),
        }));
        dispatch(registerUserRequest(info));

    };

    useEffect(() => {
        dispatch(fetchProductsDataRequest());
    }, [dispatch]);



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
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Add User
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
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
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
                                            <FontAwesomeIcon icon={faUser} className="mr-2"/>
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

                                    {/*Referral's username*/}
                                    {info.role === 'user' && <div className="form-group">
                                        <label htmlFor="referralsUsername">
                                            <FontAwesomeIcon icon={faUser} className="mr-2"/>
                                            Referral's username*
                                        </label>
                                        <input
                                            type="text"
                                            name="referralsUsername"
                                            className="form-control"
                                            id="referralsUsername"
                                            placeholder="Enter referral's username"
                                            value={info.referralsUsername}
                                            onChange={onChange}
                                        />
                                    </div>}

                                    {/* Password */}
                                    {
                                        info.role === 'manager' &&
                                        <div className="form-group">
                                            <label htmlFor="password">
                                                <FontAwesomeIcon icon={faLock} className="mr-2"/>
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
                                    }


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

                                    {/* Passport ID */}
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
                                                {value: 'male', label: 'Male'},
                                                {value: 'female', label: 'Female'}
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
                                                {value: 'manager', label: 'Manager'},
                                                {value: 'user', label: 'User'}
                                            ]}
                                            onChange={(option) => {
                                                setInfo((prevInfo) => ({
                                                    ...prevInfo,
                                                    role: option.value
                                                }));
                                                setDynamicHeader(option.label)
                                            }}/>
                                    </div>

                                    {info.role === 'user' && (

                                        <>
                                            {/*Select Product*/}
                                            <div className="form-group">
                                                <label htmlFor="role">Product*</label>
                                                <Select
                                                    options={
                                                        productsData.map((item) => ({

                                                            value: item._id,
                                                            label: item.name

                                                        }))
                                                    }
                                                    onChange={(option) => {
                                                        setInfo((prevInfo) => ({
                                                            ...prevInfo,
                                                            productId: option.value
                                                        }));
                                                    }}/>
                                            </div>

                                            {/*Quantity*/}
                                            <div className="form-group">
                                                <label htmlFor="quantity">
                                                    Quantity*
                                                </label>
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    className="form-control"
                                                    id="quantity"
                                                    value={info.quantity || 1}
                                                    onChange={onChange}
                                                    required
                                                    min="1"
                                                />
                                            </div>
                                        </>

                                    )}

                                    {
                                        info.role === 'manager' && (
                                            <>
                                                <div className="form-group">
                                                    <label htmlFor="users">
                                                        Users
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="users"
                                                        className="form-control"
                                                        id="users"
                                                        value={info.goals.users}
                                                        onChange={onChange}
                                                        required
                                                        min="1"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="income">
                                                        Income
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="income"
                                                        className="form-control"
                                                        id="income"
                                                        value={info.goals.income}
                                                        onChange={onChange}
                                                        required
                                                        min="1"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="salary">
                                                        Salary
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="salary"
                                                        className="form-control"
                                                        id="income"
                                                        value={info.salary}
                                                        onChange={onChange}
                                                        required
                                                        min="1"
                                                    />
                                                </div>
                                            </>
                                        )
                                    }


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
