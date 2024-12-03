import React, {useState} from 'react';
import Select from 'react-select';
import {Link} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Reg(props) {

    const [step, setStep] = useState(0);

    const [info, setInfo] = useState({
        email: '',
        username: '',
        password: '',
        fullName: '',
        gender: '',
        city: '',
        state: '',
        creditCardType: '',
        cvc: '',
        expirationDate: '',


    });

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else {
            console.log(info);
        }
    }

    const handlePrevious = () => {
        if (step > 0 ) setStep(step - 1);
    }

    const renderSteps = () => {

        const cardOptions = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' }
        ];

        const months = [
            { value: '1', label: 'January' },
            { value: '2', label: 'February' },
            { value: '3', label: 'March' },
            { value: '4', label: 'April' },
            { value: '5', label: 'May' },
            { value: '6', label: 'June' },
            { value: '7', label: 'July' },
            { value: '8', label: 'August' },
            { value: '9', label: 'September' },
            { value: '10', label: 'October' },
            { value: '11', label: 'November' },
            { value: '12', label: 'December' }
        ];

        const years = [
            { value: '2024', label: '2024' },
            { value: '2025', label: '2025' },
            { value: '2031', label: '2031' },
            { value: '2032', label: '2032' },
        ];

        const customStyles = {
            menuList: (provided) => ({
                ...provided,
                maxHeight: 170,
            }),
        };

        const onChange = e => {
            const { name, value } = e.target;
            setInfo((prevInfo) => ({
                ...prevInfo,
                [name]: value
            }));
        }


        return (
            <>
                <div className="content clearfix">

                    <section id="steps-uid-0-p-0" role="tabpanel" aria-labelledby="steps-uid-0-h-0"
                             className="body current" aria-hidden="false"
                             style={step === 0 ? {display: 'block'} : {display: 'none'}}>
                        <div className="form-wrap max-width-600 mx-auto">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Email Address*</label>
                                <div className="col-sm-8">
                                    <input type="email" name='email' className="form-control" onChange={onChange} value={info.email} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Username*</label>
                                <div className="col-sm-8">
                                    <input type="text" name='username' className="form-control" onChange={onChange} value={info.username} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Password*</label>
                                <div className="col-sm-8">
                                    <input type="password" name='password' className="form-control" onChange={onChange} value={info.password} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Confirm Password*</label>
                                <div className="col-sm-8">
                                    <input type="password" name='confirmPassword' className="form-control"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- Step 2 -->*/}

                    <section id="steps-uid-0-p-1" role="tabpanel" aria-labelledby="steps-uid-0-h-1"
                             className="body" aria-hidden="true"
                             style={step === 1 ? {display: 'block'} : {display: 'none'}}>
                        <div className="form-wrap max-width-600 mx-auto">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Full Name*</label>
                                <div className="col-sm-8">
                                    <input type="text" name='fullName' className="form-control" onChange={onChange} value={info.fullName} required />
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
                                               className="custom-control-input"/>
                                        <label className="custom-control-label"
                                               htmlFor="male">Male</label>
                                    </div>
                                    <div
                                        className="custom-control custom-radio custom-control-inline pb-0">
                                        <input type="radio"
                                               id="female"
                                               name="gender"
                                               className="custom-control-input"/>
                                        <label className="custom-control-label"
                                               htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">City</label>
                                <div className="col-sm-8">
                                    <input type="text" name='city' className="form-control" onChange={onChange} value={info.city} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">State</label>
                                <div className="col-sm-8">
                                    <input type="text" name='state' className="form-control" onChange={onChange} value={info.state} required />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*<!-- Step 3 -->*/}

                    <section id="steps-uid-0-p-2" role="tabpanel" aria-labelledby="steps-uid-0-h-2"
                             className="body" aria-hidden="true"
                             style={step === 2 ? {display: 'block'} : {display: 'none'}}>
                        <div className="form-wrap max-width-600 mx-auto">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Credit Card Type</label>
                                <div className="col-sm-8">
                                    <div className="dropdown bootstrap-select form-control">

                                        <Select options={cardOptions} placeholder="Select Card Type" />

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
                                    <input type="text" name='creditCardNumber' className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">CVC</label>
                                <div className="col-sm-3">
                                    <input type="text" name='cvc' className="form-control" onChange={onChange} value={info.cvc} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Expiration Date</label>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="dropdown bootstrap-select form-control">

                                                <Select styles={customStyles} options={months} placeholder="Month" menuPlacement="top" />

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

                                                <Select options={years} placeholder="Year" menuPlacement="top" />

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
                             className="body" aria-hidden="true"
                             style={step === 3 ? {display: 'block'} : {display: 'none'}}>
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
                                <input type="checkbox" className="custom-control-input"
                                       id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">I
                                    have read and agreed to the terms of services and privacy
                                    policy</label>
                            </div>
                        </div>
                    </section>

                </div>

                <div className="actions clearfix">

                    <div aria-label="Pagination" style={{display: 'flex', gap:'15px', justifyContent:'flex-end'}}>
                        {
                            step !== 0 ?
                                <button type="button"
                                        className="btn btn-primary"
                                        aria-disabled="false"
                                        style={{width:'100%'}}
                                        onClick={handlePrevious}>Previous
                                </button> :
                                null
                        }
                        <button type={step !== 4 ? 'button' : 'submit'} className="btn btn-primary"
                                aria-hidden="false"
                                aria-disabled="false"
                                style={{width:'100%'}}
                                onClick={handleNext}>{step !== 3 ? 'Next' : 'Submit'}
                        </button>
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
                                    >
                                        <div className="steps clearfix">
                                            <ul role="tablist">
                                                <li role="tab" className={step === 0 ? "first current" : "disabled"} aria-disabled="false"
                                                    aria-selected="true">
                                                    <ScrollLink
                                                        to="step1"
                                                        smooth={true}
                                                        duration={500}
                                                        spy={true}
                                                        activeClass="active"
                                                    >
                                                        <span className="step">1</span>
                                                        <span className="info">Basic Account Credentials</span>
                                                    </ScrollLink>
                                                </li>
                                                <li role="tab" className={step === 1 ? "current" : "disabled"} aria-disabled="true">
                                                    <ScrollLink
                                                        to="step2"
                                                        smooth={true}
                                                        duration={500}
                                                        spy={true}
                                                        activeClass="active"
                                                    >
                                                        <span className="step">2</span>
                                                        <span className="info">Personal Information</span>
                                                    </ScrollLink>
                                                </li>
                                                <li role="tab" className={step === 2 ? "current" : "disabled"} aria-disabled="true">
                                                    <ScrollLink
                                                        to="step3"
                                                        smooth={true}
                                                        duration={500}
                                                        spy={true}
                                                        activeClass="active"
                                                    >
                                                        <span className="step">3</span>
                                                        <span className="info">Payment Method &amp; Info</span>
                                                    </ScrollLink>
                                                </li>
                                                <li role="tab" className={step === 3 ? "current" : "disabled last"} aria-disabled="true">
                                                    <ScrollLink
                                                        to="step4"
                                                        smooth={true}
                                                        duration={500}
                                                        spy={true}
                                                        activeClass="active"
                                                    >
                                                        <span className="step">4</span>
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
            {/*<!-- success Popup html Start -->*/}
            {/*<button type="button" id="success-modal-btn" hidden="" data-toggle="modal" data-target="#success-modal"*/}
            {/*        data-backdrop="static">Launch modal*/}
            {/*</button>*/}
            <div className="modal fade" id="success-modal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered max-width-400" role="document">
                    <div className="modal-content">
                        <div className="modal-body text-center font-18">
                            <h3 className="mb-20">Form Submitted!</h3>
                            <div className="mb-30 text-center"><img src="/images/success.png" alt=''/></div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        </div>
                        <div className="modal-footer justify-content-center">
                            <Link to="login.html" className="btn btn-primary">Done</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reg;