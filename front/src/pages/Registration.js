import React, {useState} from 'react';
import Select from 'react-select';
import {Link} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import axios from 'axios';
import RegisterSuccess from "../components/RegistrationSuccess";

function Registration(props) {

    const [step, setStep] = useState(1);
    const [agree, setAgree] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const [info, setInfo] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        gender: '',
        city: '',
        state: '',
        card: {
            type: '',
            cvc: '',
            creditCardNumber: '',
            expirationDate: {
                month: '',
                year: ''
            },
        }


    });


    const onChange = (e) => {
        const { name, value } = e.target;

        setInfo((prevInfo) => {
            if (name === "cvc" || name === "expirationDate" || name === "creditCardNumber") {
                return {
                    ...prevInfo,
                    card: {
                        ...prevInfo.card,
                        [name]: value,
                    },
                };
            }
            return {
                ...prevInfo,
                [name]: value,
            };
        });
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (step < 4) setStep(step + 1);
    }

    const handlePrevious = (e) => {
        e.preventDefault();
        if (step > 1) setStep(step - 1);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const req = await axios.post(`${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_PORT}/users/registration`, {...info});

            console.log('request', req);

            if (req.status === 200) {
                setShowSuccess(true);
            }

        }catch(err){
            console.log(err);
        }

    };


    const renderSteps = () => {

        const cardOptions = [
            {value: '1', label: 'Option 1'},
            {value: '2', label: 'Option 2'},
            {value: '3', label: 'Option 3'}
        ];

        const months = [
            {value: '1', label: 'January'},
            {value: '2', label: 'February'},
            {value: '3', label: 'March'},
            {value: '4', label: 'April'},
            {value: '5', label: 'May'},
            {value: '6', label: 'June'},
            {value: '7', label: 'July'},
            {value: '8', label: 'August'},
            {value: '9', label: 'September'},
            {value: '10', label: 'October'},
            {value: '11', label: 'November'},
            {value: '12', label: 'December'}
        ];

        const years = [
            {value: '2024', label: '2024'},
            {value: '2025', label: '2025'},
            {value: '2031', label: '2031'},
            {value: '2032', label: '2032'},
        ];

        const customStyles = {
            menuList: (provided) => ({
                ...provided,
                maxHeight: 170,
            }),
        };

        const isStepValid = () => {
            switch (step) {
                case 1:
                    return (
                        info.email &&
                        info.username &&
                        info.password &&
                        info.confirmPassword &&
                        info.password === info.confirmPassword
                    );
                case 2:
                    return info.gender && info.city && info.state;
                case 3:
                    return (
                        info.card.type &&
                        info.card.cvc &&
                        info.card.expirationDate
                    );
                default:
                    return false;
            }
        };

        return (
            <>
                <div className="content clearfix">
                    {/*<!-- Step 1 -->*/}
                    <section id="steps-uid-0-p-0" role="tabpanel" aria-labelledby="steps-uid-0-h-0"
                             className="body current" aria-hidden="false"
                             style={step === 1 ? {display: 'block'} : {display: 'none'}}>
                        <div className="form-wrap max-width-600 mx-auto">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Email Address*</label>
                                <div className="col-sm-8">
                                    <input type="email" name='email' className="form-control" onChange={onChange}
                                           value={info.email} required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Username*</label>
                                <div className="col-sm-8">
                                    <input type="text" name='username' className="form-control" onChange={onChange}
                                           value={info.username} required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Password*</label>
                                <div className="col-sm-8">
                                    <input type="password" name='password' className="form-control"
                                           onChange={onChange} value={info.password} required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Confirm Password*</label>
                                <div className="col-sm-8">
                                    <input type="password"
                                           name='confirmPassword'
                                           className="form-control"
                                           onChange={onChange}
                                           value={info.confirmPassword}
                                           required/>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- Step 2 -->*/}

                    <section id="steps-uid-0-p-1" role="tabpanel" aria-labelledby="steps-uid-0-h-1"
                             className="body" aria-hidden="true"
                             style={step === 2 ? {display: 'block'} : {display: 'none'}}>
                        <div className="form-wrap max-width-600 mx-auto">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Full Name*</label>
                                <div className="col-sm-8">
                                    <input type="text" name='fullName' className="form-control" onChange={onChange}
                                           value={info.fullName} required/>
                                </div>
                            </div>
                            <div className="form-group row align-items-center">
                                <label className="col-sm-4 col-form-label">Gender*</label>
                                <div className="col-sm-8">
                                    <div
                                        className="custom-control custom-radio custom-control-inline pb-0">
                                        <input type="radio"
                                               id="male"
                                               name="gender"
                                               className="custom-control-input"
                                               value="male"
                                               onChange={() => {
                                                   setInfo((prevInfo) => ({
                                                       ...prevInfo,
                                                       gender: "male",
                                                   }))
                                               }}
                                               checked={info.gender === "male"}
                                        />
                                        <label className="custom-control-label"
                                               htmlFor="male">Male</label>
                                    </div>
                                    <div
                                        className="custom-control custom-radio custom-control-inline pb-0">
                                        <input type="radio"
                                               id="female"
                                               name="gender"
                                               className="custom-control-input"
                                               value="female"
                                               onChange={() => {
                                                   setInfo((prevInfo) => ({
                                                       ...prevInfo,
                                                       gender: "female",
                                                   }))
                                               }}
                                               checked={info.gender === "female"}
                                        />
                                        <label className="custom-control-label"
                                               htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">City</label>
                                <div className="col-sm-8">
                                    <input type="text" name='city' className="form-control" onChange={onChange}
                                           value={info.city} required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">State</label>
                                <div className="col-sm-8">
                                    <input type="text" name='state' className="form-control" onChange={onChange}
                                           value={info.state} required/>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*<!-- Step 3 -->*/}

                    <section id="steps-uid-0-p-2" role="tabpanel" aria-labelledby="steps-uid-0-h-2"
                             className="body" aria-hidden="true"
                             style={step === 3 ? {display: 'block'} : {display: 'none'}}>
                        <div className="form-wrap max-width-600 mx-auto">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Credit Card Type</label>
                                <div className="col-sm-8">
                                    <div className="dropdown bootstrap-select form-control">

                                        <Select options={cardOptions}
                                                placeholder="Select Card Type"
                                                onChange={(option) => {
                                                    setInfo((prevInfo) => ({
                                                        ...prevInfo,
                                                        card: {
                                                            ...prevInfo.card,
                                                            type: option.value,
                                                        },
                                                    }));
                                                }}/>

                                        <div className="dropdown-menu ">
                                            <div className="inner show" role="listbox"
                                                 id="bs-select-1" tabIndex="-1">
                                                <ul className="dropdown-menu inner show"
                                                    role="presentation"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row align-items-center">
                                <label className="col-sm-4 col-form-label">Credit Card
                                    Number</label>
                                <div className="col-sm-8">
                                    <input type="text" name='creditCardNumber' className="form-control" onChange={onChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">CVC</label>
                                <div className="col-sm-3">
                                    <input type="text" name='cvc' className="form-control" onChange={onChange} required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Expiration Date</label>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="dropdown bootstrap-select form-control">

                                                <Select styles={customStyles}
                                                        options={months}
                                                        placeholder="Month"
                                                        menuPlacement="top"
                                                        onChange={(value) => {
                                                            setInfo((prevInfo) => ({
                                                                ...prevInfo,
                                                                card: {
                                                                    ...prevInfo.card,
                                                                    expirationDate: {
                                                                        ...prevInfo.card.expirationDate,
                                                                        month: value.value
                                                                    },
                                                                },
                                                            }));
                                                        }}
                                                />

                                                <div className="dropdown-menu ">
                                                    <div className="inner show" role="listbox"
                                                         id="bs-select-2" tabIndex="-1">
                                                        <ul className="dropdown-menu inner show"
                                                            role="presentation"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="dropdown bootstrap-select form-control">

                                                <Select options={years}
                                                        placeholder="Year"
                                                        menuPlacement="top"
                                                        onChange={(value) => {
                                                            setInfo((prevInfo) => ({
                                                                ...prevInfo,
                                                                card: {
                                                                    ...prevInfo.card,
                                                                    expirationDate: {
                                                                        ...prevInfo.card.expirationDate,
                                                                        year: value.value
                                                                    },
                                                                },
                                                            }));
                                                        }}
                                                />

                                                <div className="dropdown-menu ">
                                                    <div className="inner show" role="listbox"
                                                         id="bs-select-3" tabIndex="-1">
                                                        <ul className="dropdown-menu inner show"
                                                            role="presentation"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*<!-- Step 4 -->*/}

                    <section id="steps-uid-0-p-3" role="tabpanel" aria-labelledby="steps-uid-0-h-3"
                             className="body"
                             style={step === 4 ? {display: 'block'} : {display: 'none'}}>
                        <div className="form-wrap max-width-600 mx-auto">
                            <ul className="register-info">
                                <li>
                                    <div className="row">
                                        <div className="col-sm-4 weight-600">Email Address</div>
                                        <div className="col-sm-8">{info.email}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-sm-4 weight-600">Username</div>
                                        <div className="col-sm-8">{info.username}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-sm-4 weight-600">Password</div>
                                        <div className="col-sm-8">{info.password}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-sm-4 weight-600">Full Name</div>
                                        <div className="col-sm-8">{info.fullName}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-sm-4 weight-600">Location</div>
                                        <div className="col-sm-8">{info.state + ', ' + info.city}</div>
                                    </div>
                                </li>
                            </ul>
                            <div className="custom-control custom-checkbox mt-4">
                                <input type="checkbox"
                                       className="custom-control-input"
                                       id="customCheck1"
                                       onChange={() => setAgree(!agree)}

                                />
                                <label className="custom-control-label" htmlFor="customCheck1">I
                                    have read and agreed to the terms of services and privacy
                                    policy</label>
                            </div>
                        </div>
                    </section>

                </div>

                <div className="actions clearfix">

                    <div aria-label="Pagination" style={{display: 'flex', gap: '15px', justifyContent: 'flex-end'}}>
                        {
                            step !== 1 ?
                                <button type="button"
                                        className="btn btn-primary"
                                        aria-disabled="false"
                                        style={{width: '100%'}}
                                        onClick={handlePrevious}>Previous
                                </button> :
                                null
                        }
                        {step !== 4 ? <button type='button'
                                              className="btn btn-primary"
                                              aria-hidden="false"
                                              aria-disabled="false"
                                              style={{width: '100%'}}
                                              onClick={handleNext}
                                              disabled={!isStepValid()}>Next
                            </button> :
                            <button type='submit' className="btn btn-primary"
                                    aria-hidden="false"
                                    aria-disabled="false"
                                    style={{width: '100%'}}
                                    disabled={!agree}
                            >Submit
                            </button>}

                    </div>
                </div>
            </>
        );
    }


    return (
        <div className="login-page">
            <div className="login-header box-shadow">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="brand-logo">
                        <Link to="login.html">
                            <img src="/images/deskapp-logo.svg" alt=""/>
                        </Link>
                    </div>
                    <div className="login-menu">
                        <ul>
                            <li><Link to="login.html">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-7">
                            <img src="/images/register-page-img.png" alt=""/>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="register-box bg-white box-shadow border-radius-10">
                                <div className="wizard-content">
                                    <form className="tab-wizard2 wizard-circle wizard clearfix"
                                          role="application"
                                          id="steps-uid-0"
                                          onSubmit={handleSubmit}
                                    >
                                        <div className="steps clearfix">
                                            <ul role="tablist">
                                                <li role="tab"
                                                    className={step === 1 ? "first current" : "disabled"}

                                                    aria-disabled="false"
                                                    aria-selected="true">
                                                    <ScrollLink
                                                        to="step1"
                                                        smooth={true}
                                                        duration={500}
                                                        spy={true}
                                                        activeClass="active"
                                                    >
                                                            <span className="step" style={{
                                                                border: '1px solid rgba(24, 31, 72, .6)',
                                                                borderRadius: '50%',
                                                                width: '35px',
                                                                fontSize: '20px'
                                                            }}>1</span>
                                                        <span className="info">Basic Account Credentials</span>
                                                    </ScrollLink>
                                                </li>
                                                <li role="tab" className={step === 2 ? "current" : "disabled"}
                                                    aria-disabled="true">
                                                    <ScrollLink
                                                        to="step2"
                                                        smooth={true}
                                                        duration={500}
                                                        spy={true}
                                                        activeClass="active"
                                                    >
                                                            <span className="step" style={{
                                                                border: '1px solid rgba(24, 31, 72, .6)',
                                                                borderRadius: '50%',
                                                                width: '35px',
                                                                fontSize: '20px'
                                                            }}>2</span>
                                                        <span className="info">Personal Information</span>
                                                    </ScrollLink>
                                                </li>
                                                <li role="tab" className={step === 3 ? "current" : "disabled"}
                                                    aria-disabled="true">
                                                    <ScrollLink
                                                        to="step3"
                                                        smooth={true}
                                                        duration={500}
                                                        spy={true}
                                                        activeClass="active"
                                                    >
                                                            <span className="step" style={{
                                                                border: '1px solid rgba(24, 31, 72, .6)',
                                                                borderRadius: '50%',
                                                                width: '35px',
                                                                fontSize: '20px'
                                                            }}>3</span>
                                                        <span className="info">Payment Method &amp; Info</span>
                                                    </ScrollLink>
                                                </li>
                                                <li role="tab" className={step === 4 ? "current" : "disabled last"}
                                                    aria-disabled="true">
                                                    <ScrollLink
                                                        to="step4"
                                                        smooth={true}
                                                        duration={500}
                                                        spy={true}
                                                        activeClass="active"
                                                    >
                                                            <span className="step" style={{
                                                                border: '1px solid rgba(24, 31, 72, .6)',
                                                                borderRadius: '50%',
                                                                width: '35px',
                                                                fontSize: '20px'
                                                            }}>4</span>
                                                        <span className="info">Overview Information</span>
                                                    </ScrollLink>
                                                </li>
                                            </ul>
                                        </div>

                                        {renderSteps()}

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showSuccess && (<RegisterSuccess/>)}
        </div>
    );
}

export default Registration;