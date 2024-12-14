import React, {useEffect, useState} from 'react';
import RegistrationSuccess from "../components/RegistrationSuccess";
import Select from "react-select";
import querystring from "querystring";
import {useLocation, useNavigate} from "react-router-dom";
import {registerUserRequest} from "../store/actions/registerUsersActions";
import {useDispatch, useSelector} from "react-redux";

function RegisterUsers() {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {status, error} = useSelector(state => state.registerUsers);
    console.log(status);
    const location = useLocation();
    const [showSuccess, setShowSuccess] = useState(false);
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        passportID: "",
        username: "",
        url: "",
        telephone: "",
        gender: "",
        quantity: 1,
        productId: "",
        role: "user"
    });

    useEffect(() => {
        const parsedQuery = querystring.parse(location.search.slice(1));
        const { product } = parsedQuery;

        if (product) {
            setUser((prevState) => ({
                ...prevState,
                productId: product,
            }));
            console.log("Product ID:", product);
        } else {
            console.log("Product ID not found in query string");
        }
    }, [location.search]);

    const handleChange = e => {

        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));

    };

    const handleSubmit = async e => {
        e.preventDefault();

        dispatch(registerUserRequest(user));

        if (status === 'success') {
            return setShowSuccess(true);
        }
        navigate('/login');
    }


    return (
        <div className="pd-20 card-box mb-30">
            <div className="clearfix">
                <div className="pull-left">
                    <h4 className="text-blue h4">Default Basic Forms</h4>
                    <p className="mb-30">All bootstrap element classies</p>
                </div>

            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">Full Name</label>
                    <div className="col-sm-12 col-md-10">
                        <input onChange={handleChange} value={user.fullName} name="fullName" className="form-control" type="text" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">Gender</label>
                    <div className="col-sm-12 col-md-10">
                        <Select
                            options={[
                                { value: 'male', label: 'Male' },
                                { value: 'female', label: 'Female' }
                            ]}
                            onChange={(option) => {
                                setUser((prevInfo) => ({
                                    ...prevInfo,
                                    gender: option.value
                                }));
                            }}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">Passport ID</label>
                    <div className="col-sm-12 col-md-10">
                        <input onChange={handleChange} value={user.passportID} name="passportID" className="form-control" type="text" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">username</label>
                    <div className="col-sm-12 col-md-10">
                        <input onChange={handleChange} value={user.username} name="username" className="form-control" type="text" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">Email</label>
                    <div className="col-sm-12 col-md-10">
                        <input onChange={handleChange} value={user.email} name="email" className="form-control" type="email" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">URL</label>
                    <div className="col-sm-12 col-md-10">
                        <input onChange={handleChange} value={user.url} name="url" className="form-control" type="url" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">Telephone</label>
                    <div className="col-sm-12 col-md-10">
                        <input onChange={handleChange} value={user.telephone} name="telephone" className="form-control" type="tel" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">Quantity</label>
                    <div className="col-sm-12 col-md-10">
                        <input onChange={handleChange} value={user?.quantity || 1} name="quantity" className="form-control" type="number" min="1" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-12 col-md-10">
                        <input className="btn btn-primary btn-sm scroll-click" value="Submit" type="submit"/>
                    </div>
                </div>

            </form>
            {showSuccess && <RegistrationSuccess/>}
        </div>
    );
}

export default RegisterUsers;