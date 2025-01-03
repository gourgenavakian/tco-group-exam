import React, {useEffect, useState} from 'react';
import Wrapper from "../components/Wrapper";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TimeLineTab from "../components/TimeLineTab";
import TasksTab from "../components/TasksTab";
import SettingTab from "../components/SettingTab";
import {Link} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataRequest} from "../store/actions/profileDataActions";
import axios from "axios";
import useLocalStorage from "../helpers/useLocalStorage";


function Profile() {

    const socialIcons = [faFacebook, faTwitter, faInstagram, faLinkedin];
    const [userID, getUserID, setUserID] = useLocalStorage("userID");
    const [showCurrentTab, setShowCurrentTab] = useState('');
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [showForm, setShowForm] = useState(false);


    const dispatch = useDispatch();
    const { data, error } = useSelector((state) => state.data);

    console.log(userID, 'USERID');

    useEffect(() => {
        dispatch(fetchDataRequest());
    }, [dispatch, file]);

    const renderTabContent = () => {
        switch (showCurrentTab) {

            case 'timeline': return <TimeLineTab />;
            case 'tasks': return <TasksTab />;
            case 'settings': return <SettingTab />;
            default: return <TimeLineTab />;
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleCancel = () => {
        setFile(null);
        setPreview(null);
        setShowForm(false);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!file) {
            return alert('Please select a file to upload');
        }

        try {

            const formData = new FormData();
            formData.append('image', file);
            formData.append('userId', userID);

            const response = axios.post('http://localhost:8088/upload', formData,
                {headers: {'Content-Type': 'multipart/form-data'}});

            console.log(response);

            setShowForm(false);
            setFile(null);
            setPreview(null);

            // const updatedUser = { ...user, profileImage: response.data.filePath };

        }catch (e) {
            console.error(e);
        }
    };


    return (
        <Wrapper>
            <div className="main-container">
                <div className="pd-ltr-20 xs-pd-20-10">
                    <div className="min-height-200px">
                        <div className="page-header">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="title">
                                        <h4>Profile</h4>
                                    </div>
                                    <nav aria-label="breadcrumb" role="navigation">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/home/:username/:id">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Profile</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
                                <div className="pd-20 card-box height-100-p">
                                    <div className="profile-photo">
                                        <Link to="" data-toggle="modal" data-target="#modal"
                                              className="edit-avatar">
                                            <FontAwesomeIcon icon={faPencil}/>
                                        </Link>


                                        <input type='file' className="edit-avatar" onChange={handleFileChange}/>

                                        <img src={data?.avatar || preview || '/images/avatar.avif'} alt=""
                                             className="avatar-photo"/>
                                        <form onSubmit={handleSubmit}
                                            className={`image-form ${showForm || file ? 'visible' : ''}`}>
                                            {file && (
                                                <div>
                                                    <button type="submit"
                                                            className="upload-button">Upload Image
                                                    </button>
                                                    <button type="button"
                                                            className="cancel-button"
                                                            onClick={handleCancel}
                                                            >Cancel
                                                    </button>
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                    <h5 className="text-center h5 mb-0">{data?.fullName}</h5>
                                    <p className="text-center text-muted font-14">Lorem ipsum dolor sit amet</p>
                                    <div className="profile-info">
                                        <h5 className="mb-20 h5 text-blue">Contact Information</h5>
                                        <ul>
                                            <li>
                                                <span>Email Address:</span>
                                                {data?.email}
                                            </li>
                                            <li>
                                                <span>Phone Number:</span>
                                                -
                                            </li>
                                            <li>
                                                <span>Country:</span>
                                                {data?.country}
                                            </li>
                                            <li>
                                                <span>City:</span>
                                                {data?.city}

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="profile-social">
                                        <h5 className="mb-20 h5 text-blue">Social Links</h5>
                                        <ul className="clearfix">

                                            {socialIcons.map((item, i) => (
                                                <li key={i}>
                                                    <Link to="#" className="btn" data-bgcolor="#3b5998"
                                                       data-color="#ffffff"
                                                       style={{color: 'rgb(255, 255, 255), backgroundColor: rgb(59, 89, 152)'}}
                                                    >
                                                        <FontAwesomeIcon icon={item} size='lg'/>
                                                    </Link>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                    <div className="profile-skills">
                                        <h5 className="mb-20 h5 text-blue">Key Skills</h5>
                                        <h6 className="mb-5 font-14">HTML</h6>
                                        <div className="progress mb-20" style={{height: '6px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '90%'}}
                                                 aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h6 className="mb-5 font-14">Css</h6>
                                        <div className="progress mb-20" style={{height: '6px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '70%'}}
                                                 aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h6 className="mb-5 font-14">jQuery</h6>
                                        <div className="progress mb-20" style={{height: '6px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                                 aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h6 className="mb-5 font-14">Bootstrap</h6>
                                        <div className="progress mb-20" style={{height: '6px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '80%'}}
                                                 aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
                                <div className="card-box height-100-p overflow-hidden">
                                    <div className="profile-tab height-100-p">
                                        <div className="tab height-100-p">
                                            <ul className="nav nav-tabs customtab" role="tablist">
                                                <li className="nav-item">
                                                    <Link className="nav-link"
                                                          data-toggle="tab" to="#timeline"
                                                          role="tab"
                                                          aria-selected="true"
                                                          onClick={() => setShowCurrentTab('timeline')}>Timeline</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link"
                                                          data-toggle="tab"
                                                          to="#tasks"
                                                          role="tab"
                                                          aria-selected="false"
                                                          onClick={() => setShowCurrentTab('tasks')}>Tasks</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link"
                                                          data-toggle="tab"
                                                          to="#setting"
                                                          role="tab"
                                                          aria-selected="false"
                                                          onClick={() => setShowCurrentTab('settings')}>Settings</Link>
                                                </li>
                                            </ul>
                                            <div className="tab-content">

                                                <TransitionGroup>
                                                    <CSSTransition
                                                        key={showCurrentTab}
                                                        timeout={300}
                                                        classNames="fade"
                                                    >
                                                        {renderTabContent()}
                                                    </CSSTransition>
                                                </TransitionGroup>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Profile;