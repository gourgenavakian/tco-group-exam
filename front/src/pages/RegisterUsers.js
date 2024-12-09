import React, {useEffect, useState} from 'react';
import axios from "axios";
import RegistrationSuccess from "../components/RegistrationSuccess";
import Select from "react-select";


function RegisterUsers(props) {

    const [showSuccess, setShowSuccess] = useState(false);
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        passportID: "",
        username: "",
        url: "",
        telephone: "",
        gender: "",
        referralsUsername: ""
    });

    const handleChange = e => {

        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));

    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {

            const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}/users/registration`, {...user});
            console.log(response);

            if (response.status === 201) setShowSuccess(true);

        }catch(err){
            console.log(err)
        }
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
                    <label className="col-sm-12 col-md-2 col-form-label">Referral's username</label>
                    <div className="col-sm-12 col-md-10">
                        <input onChange={handleChange} value={user.referralsUsername} name="referralsUsername" className="form-control" type="text" required/>
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