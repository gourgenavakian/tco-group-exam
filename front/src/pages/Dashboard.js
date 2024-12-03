import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faGear, faSearch, faHouse, faMessage } from "@fortawesome/free-solid-svg-icons";
import Chart1 from "../components/Chart";


function Dashboard(props) {
    return (
        <div className="dashboard-container" style={{display: 'flex', flexDirection: 'column'}}>

            <div className="header"
                 style={{display: 'flex', flexDirection: 'column', position: 'relative', alignSelf: 'flex-end'}}>
                <div className="header-left">
                    <div className="menu-icon dw dw-menu"></div>
                    <div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
                    <div className="header-search">
                        <form>
                            <div className="form-group mb-0">
                                <FontAwesomeIcon className='dw dw-search2 search-icon' icon={faSearch}/>
                                <input type="text" className="form-control search-input" placeholder="Search Here"/>
                                <div className="dropdown">
                                    <a className="dropdown-toggle no-arrow" href="#" role="button"
                                       data-toggle="dropdown">
                                        <i className="ion-arrow-down-c"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="form-group row">
                                            <label className="col-sm-12 col-md-2 col-form-label">From</label>
                                            <div className="col-sm-12 col-md-10">
                                                <input className="form-control form-control-sm form-control-line"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-12 col-md-2 col-form-label">To</label>
                                            <div className="col-sm-12 col-md-10">
                                                <input className="form-control form-control-sm form-control-line"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-12 col-md-2 col-form-label">Subject</label>
                                            <div className="col-sm-12 col-md-10">
                                                <input className="form-control form-control-sm form-control-line"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <button className="btn btn-primary">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="header-right">
                    <div className="dashboard-setting user-notification">
                        <div className="dropdown">
                            <a className="dropdown-toggle no-arrow" href="javascript:;" data-toggle="right-sidebar">
                                <FontAwesomeIcon icon={faGear} className='dw dw-settings2'/>
                            </a>
                        </div>
                    </div>
                    <div className="user-notification">
                        <div className="dropdown">
                            <a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">

                                <FontAwesomeIcon className="icon-copy dw dw-notification" icon={faBell}/>
                                <span className="badge notification-active"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="notification-list mx-h-350 customscroll">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="/images/img.jpg" alt=""/>
                                                <h3>John Doe</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/photo1.jpg" alt=""/>
                                                <h3>Lea R. Frith</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/photo2.jpg" alt=""/>
                                                <h3>Erik L. Richards</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/photo3.jpg" alt=""/>
                                                <h3>John Doe</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/photo4.jpg" alt=""/>
                                                <h3>Renee I. Hansen</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed...</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/img.jpg" alt=""/>
                                                <h3>Vicki M. Coleman</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed...</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-info-dropdown">
                        <div className="dropdown">
                            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
						<span className="user-icon">
							<img src="/images/photo1.jpg" alt=""/>
						</span>
                                <span className="user-name">Ross C. Lopez</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                <a className="dropdown-item" href="profile.html"><i
                                    className="dw dw-user1"></i> Profile</a>
                                <a className="dropdown-item" href="profile.html"><i
                                    className="dw dw-settings2"></i> Setting</a>
                                <a className="dropdown-item" href="faq.html"><i className="dw dw-help"></i> Help</a>
                                <a className="dropdown-item" href="login.html"><i className="dw dw-logout"></i> Log
                                    Out</a>
                            </div>
                        </div>
                    </div>
                    <div className="github-link">
                        <a href="https://github.com/dropways/deskapp" target="_blank"><img src="/images/github.svg"
                                                                                           alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="main-container"
                 style={{display: 'flex', flexDirection: 'column', position: 'relative', width: '100%'}}>
                <div className="pd-ltr-20">
                    <div className="card-box pd-20 height-100-p mb-30">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <img src="/images/banner-img.png" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <h4 className="font-20 weight-500 mb-10 text-capitalize">
                                    Welcome back <div className="weight-600 font-30 text-blue">Johnny Brown!</div>
                                </h4>
                                <p className="font-18 max-width-600">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Unde hic non repellendus debitis iure, doloremque assumenda. Autem modi,
                                    corrupti,
                                    nobis ea iure fugiat, veniam non quaerat mollitia animi error corporis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 mb-30">
                            <div className="card-box height-100-p widget-style1">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="progress-data">
                                        <div id="chart">
                                            <svg
                                                id="SvgjsSvg1262"
                                                width="70"
                                                height="102.7"
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                                className="apexcharts-svg"
                                                xmlnsData="ApexChartsNS"
                                                transform="translate(0, 0)"
                                                style={{background: "transparent"}}
                                            >
                                                <defs>
                                                    <clipPath id="gridRectMask2a87d3">
                                                        <rect
                                                            width="106"
                                                            height="102"
                                                            x="-3"
                                                            y="-1"
                                                            rx="0"
                                                            ry="0"
                                                            fill="#ffffff"
                                                            opacity="1"
                                                            strokeWidth="0"
                                                            stroke="none"
                                                            strokeDasharray="0"
                                                        />
                                                    </clipPath>
                                                    <clipPath id="gridRectMarkerMask2a87d3">
                                                        <rect
                                                            width="102"
                                                            height="102"
                                                            x="-1"
                                                            y="-1"
                                                            rx="0"
                                                            ry="0"
                                                            fill="#ffffff"
                                                            opacity="1"
                                                            strokeWidth="0"
                                                            stroke="none"
                                                            strokeDasharray="0"
                                                        />
                                                    </clipPath>
                                                    <linearGradient id="SvgjsLinearGradient1272">
                                                        <stop stopOpacity="1" stopColor="rgba(242,242,242,1)"
                                                              offset="0"/>
                                                        <stop stopOpacity="1" stopColor="rgba(0,150,136,1)" offset="1"/>
                                                    </linearGradient>
                                                    <linearGradient id="SvgjsLinearGradient1282">
                                                        <stop stopOpacity="1" stopColor="rgba(236,240,244,1)"
                                                              offset="0"/>
                                                        <stop stopOpacity="1" stopColor="rgba(0,150,136,1)" offset="1"/>
                                                    </linearGradient>
                                                </defs>
                                                <g
                                                    className="apexcharts-inner apexcharts-graphical"
                                                    transform="translate(-15, 0)"
                                                >
                                                    <g className="apexcharts-radialbar">
                                                        <g>
                                                            <g className="apexcharts-tracks">
                                                                <g className="apexcharts-radialbar-track apexcharts-track"
                                                                   rel="1">
                                                                    <path
                                                                        d="M 50 20.762195121951216 A 29.237804878048784 29.237804878048784 0 1 1 49.99489704041412 20.762195567268446"
                                                                        fill="none"
                                                                        fillOpacity="1"
                                                                        stroke="rgba(242,242,242,0.85)"
                                                                        strokeOpacity="1"
                                                                        strokeLinecap="butt"
                                                                        strokeWidth="5.524268292682928"
                                                                        strokeDasharray="0"
                                                                    />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="M 50 20.762195121951216 A 29.237804878048784 29.237804878048784 0 1 1 22.193195148565476 59.03497858553581"
                                                                    fill="none"
                                                                    fillOpacity="0.85"
                                                                    stroke="url(#SvgjsLinearGradient1282)"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="butt"
                                                                    strokeWidth="5.695121951219512"
                                                                    strokeDasharray="0"
                                                                />
                                                                <circle
                                                                    r="21.47567073170732"
                                                                    cx="50"
                                                                    cy="50"
                                                                    className="apexcharts-radialbar-hollow"
                                                                    fill="transparent"
                                                                />
                                                                <text
                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                    x="50"
                                                                    y="55"
                                                                    textAnchor="middle"
                                                                    fontSize="15px"
                                                                    fontWeight="400"
                                                                    fill="#333333"
                                                                >
                                                                    70%
                                                                </text>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="widget-data">
                                        <div className="h4 mb-0">2020</div>
                                        <div className="weight-600 font-14">Contact</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mb-30">
                            <div className="card-box height-100-p widget-style1">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="progress-data">
                                        <div id="chart2">
                                            <svg
                                                id="SvgjsSvg1289"
                                                width="70"
                                                height="102.69999999999999"
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                                className="apexcharts-svg"
                                                xmlnsData="ApexChartsNS"
                                                transform="translate(0, 0)"
                                                style={{background: 'transparent'}}
                                            >
                                                <g id="SvgjsG1291" className="apexcharts-inner apexcharts-graphical"
                                                   transform="translate(-15, 0)">
                                                    <defs id="SvgjsDefs1290">
                                                        <clipPath id="gridRectMask2a87d5">
                                                            <rect
                                                                id="SvgjsRect1292"
                                                                width="106"
                                                                height="102"
                                                                x="-3"
                                                                y="-1"
                                                                rx="0"
                                                                ry="0"
                                                                fill="#ffffff"
                                                                opacity="1"
                                                                strokeWidth="0"
                                                                stroke="none"
                                                                strokeDasharray="0"
                                                            ></rect>
                                                        </clipPath>
                                                        <clipPath id="gridRectMarkerMask2a87d5">
                                                            <rect
                                                                id="SvgjsRect1293"
                                                                width="102"
                                                                height="102"
                                                                x="-1"
                                                                y="-1"
                                                                rx="0"
                                                                ry="0"
                                                                fill="#ffffff"
                                                                opacity="1"
                                                                strokeWidth="0"
                                                                stroke="none"
                                                                strokeDasharray="0"
                                                            ></rect>
                                                        </clipPath>
                                                        <linearGradient id="SvgjsLinearGradient1299">
                                                            <stop id="SvgjsStop1300" stopOpacity="1"
                                                                  stopColor="rgba(242,242,242,1)" offset="0"></stop>
                                                            <stop id="SvgjsStop1301" stopOpacity="1"
                                                                  stopColor="rgba(245,103,103,1)" offset="1"></stop>
                                                        </linearGradient>
                                                        <linearGradient id="SvgjsLinearGradient1309">
                                                            <stop id="SvgjsStop1310" stopOpacity="1"
                                                                  stopColor="rgba(236,240,244,1)" offset="0"></stop>
                                                            <stop id="SvgjsStop1311" stopOpacity="1"
                                                                  stopColor="rgba(245,103,103,1)" offset="1"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <g id="SvgjsG1295" className="apexcharts-radialbar">
                                                        <g id="SvgjsG1296">
                                                            <g id="SvgjsG1297" className="apexcharts-tracks">
                                                                <g id="SvgjsG1298"
                                                                   className="apexcharts-radialbar-track apexcharts-track"
                                                                   rel="1">
                                                                    <path
                                                                        id="apexcharts-radialbarTrack-0"
                                                                        d="M 50 20.762195121951216 A 29.237804878048784 29.237804878048784 0 1 1 49.99489704041412 20.762195567268446"
                                                                        fill="none"
                                                                        fillOpacity="1"
                                                                        stroke="rgba(242,242,242,0.85)"
                                                                        strokeOpacity="1"
                                                                        strokeLinecap="butt"
                                                                        strokeWidth="5.524268292682928"
                                                                        strokeDasharray="0"
                                                                        className="apexcharts-radialbar-area"
                                                                    ></path>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG1304">
                                                                <g
                                                                    id="SvgjsG1308"
                                                                    className="apexcharts-series apexcharts-radial-series"
                                                                    seriesName="seriesx1"
                                                                    rel="1"
                                                                    dataRealIndex="0"
                                                                >
                                                                    <path
                                                                        id="SvgjsPath1313"
                                                                        d="M 50 20.762195121951216 A 29.237804878048784 29.237804878048784 0 1 1 20.762195121951216 50.00000000000001"
                                                                        fill="none"
                                                                        fillOpacity="0.85"
                                                                        stroke="url(#SvgjsLinearGradient1309)"
                                                                        strokeOpacity="1"
                                                                        strokeLinecap="butt"
                                                                        strokeWidth="5.695121951219512"
                                                                        strokeDasharray="0"
                                                                        className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                                        dataAngle="270"
                                                                        dataValue="75"
                                                                        index="0"
                                                                        j="0"
                                                                    ></path>
                                                                </g>
                                                                <circle
                                                                    id="SvgjsCircle1305"
                                                                    r="21.47567073170732"
                                                                    cx="50"
                                                                    cy="50"
                                                                    className="apexcharts-radialbar-hollow"
                                                                    fill="transparent"
                                                                ></circle>
                                                                <g
                                                                    id="SvgjsG1306"
                                                                    className="apexcharts-datalabels-group"
                                                                    transform="translate(0, 0) scale(1)"
                                                                    style={{opacity: 1}}
                                                                >
                                                                    <text
                                                                        id="SvgjsText1307"
                                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                                        x="50"
                                                                        y="55"
                                                                        textAnchor="middle"
                                                                        dominantBaseline="auto"
                                                                        fontSize="15px"
                                                                        fontWeight="400"
                                                                        fill="#333333"
                                                                        className="apexcharts-text apexcharts-datalabel-value"
                                                                    >
                                                                        75%
                                                                    </text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="widget-data">
                                        <div className="h4 mb-0">400</div>
                                        <div className="weight-600 font-14">Deals</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mb-30">
                            <div className="card-box height-100-p widget-style1">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="progress-data">
                                        <div id="chart3">
                                            <svg
                                                width="70"
                                                height="102.7"
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                                className="apexcharts-svg"
                                                xmlnsData="ApexChartsNS"
                                                transform="translate(0, 0)"
                                                style={{background: 'transparent'}}
                                            >
                                                <g id="SvgjsG1318" className="apexcharts-inner apexcharts-graphical"
                                                   transform="translate(-15, 0)">
                                                    <defs id="SvgjsDefs1317">
                                                        <clipPath id="gridRectMask2a87d8">
                                                            <rect
                                                                id="SvgjsRect1319"
                                                                width="106"
                                                                height="102"
                                                                x="-3"
                                                                y="-1"
                                                                rx="0"
                                                                ry="0"
                                                                fill="#ffffff"
                                                                opacity="1"
                                                                strokeWidth="0"
                                                                stroke="none"
                                                                strokeDasharray="0"
                                                            ></rect>
                                                        </clipPath>
                                                        <linearGradient id="SvgjsLinearGradient1336">
                                                            <stop id="SvgjsStop1337" stopOpacity="1"
                                                                  stopColor="rgba(236,240,244,1)" offset="0"></stop>
                                                            <stop id="SvgjsStop1338" stopOpacity="1"
                                                                  stopColor="rgba(41,121,255,1)" offset="1"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <g id="SvgjsG1322" className="apexcharts-radialbar">
                                                        <g id="SvgjsG1323">
                                                            <g id="SvgjsG1324" className="apexcharts-tracks">
                                                                <g id="SvgjsG1325"
                                                                   className="apexcharts-radialbar-track apexcharts-track"
                                                                   rel="1">
                                                                    <path
                                                                        id="apexcharts-radialbarTrack-0"
                                                                        d="M 50 20.762195121951216 A 29.237804878048784 29.237804878048784 0 1 1 49.99489704041412 20.762195567268446"
                                                                        fill="none"
                                                                        fillOpacity="1"
                                                                        stroke="rgba(242,242,242,0.85)"
                                                                        strokeOpacity="1"
                                                                        strokeLinecap="butt"
                                                                        strokeWidth="5.524268292682928"
                                                                        strokeDasharray="0"
                                                                        className="apexcharts-radialbar-area"
                                                                    ></path>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG1331">
                                                                <g id="SvgjsG1335"
                                                                   className="apexcharts-series apexcharts-radial-series"
                                                                   seriesName="seriesx1" rel="1" data-realIndex="0">
                                                                    <path
                                                                        id="SvgjsPath1340"
                                                                        d="M 50 20.762195121951216 A 29.237804878048784 29.237804878048784 0 1 1 26.346118975439794 32.814449483278"
                                                                        fill="none"
                                                                        fillOpacity="0.85"
                                                                        stroke="url(#SvgjsLinearGradient1336)"
                                                                        strokeOpacity="1"
                                                                        strokeLinecap="butt"
                                                                        strokeWidth="5.695121951219512"
                                                                        strokeDasharray="0"
                                                                        className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                                        data-angle="306"
                                                                        data-value="85"
                                                                        index="0"
                                                                    ></path>
                                                                </g>
                                                                <circle id="SvgjsCircle1332" r="21.47567073170732"
                                                                        cx="50" cy="50"
                                                                        className="apexcharts-radialbar-hollow"
                                                                        fill="transparent"></circle>
                                                                <g id="SvgjsG1333"
                                                                   className="apexcharts-datalabels-group"
                                                                   transform="translate(0, 0) scale(1)"
                                                                   style={{opacity: 1}}>
                                                                    <text
                                                                        id="SvgjsText1334"
                                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                                        x="50"
                                                                        y="55"
                                                                        textAnchor="middle"
                                                                        dominantBaseline="auto"
                                                                        fontSize="15px"
                                                                        fontWeight="400"
                                                                        fill="#333333"
                                                                        className="apexcharts-text apexcharts-datalabel-value"
                                                                    >
                                                                        85%
                                                                    </text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="widget-data">
                                        <div className="h4 mb-0">350</div>
                                        <div className="weight-600 font-14">Campaign</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mb-30">
                            <div className="card-box height-100-p widget-style1">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="progress-data">
                                        <div id="chart4">

                                            <div
                                                id="apexcharts88467b"
                                                className="apexcharts-canvas apexcharts88467b apexcharts-theme-light"
                                                style={{width: '70px', height: '102.7px'}}
                                            >
                                                <svg
                                                    id="SvgjsSvg3492"
                                                    width="70"
                                                    height="102.7"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    version="1.1"
                                                    xmlnsXlink="http://www.w3.org/2000/svg"
                                                    xmlnsSvgjs="http://svgjs.com/svgjs"
                                                    className="apexcharts-svg"
                                                    style={{background: 'transparent'}}
                                                >
                                                    <g
                                                        id="SvgjsG3494"
                                                        className="apexcharts-inner apexcharts-graphical"
                                                        transform="translate(-15, 0)"
                                                    >
                                                        <defs id="SvgjsDefs3493">
                                                            <clipPath id="gridRectMask88467b">
                                                                <rect
                                                                    id="SvgjsRect3495"
                                                                    width="106"
                                                                    height="102"
                                                                    x="-3"
                                                                    y="-1"
                                                                    rx="0"
                                                                    ry="0"
                                                                    fill="#ffffff"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                ></rect>
                                                            </clipPath>
                                                            <clipPath id="gridRectMarkerMask88467b">
                                                                <rect
                                                                    id="SvgjsRect3496"
                                                                    width="102"
                                                                    height="102"
                                                                    x="-1"
                                                                    y="-1"
                                                                    rx="0"
                                                                    ry="0"
                                                                    fill="#ffffff"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                ></rect>
                                                            </clipPath>
                                                            <linearGradient id="SvgjsLinearGradient3502">
                                                                <stop
                                                                    id="SvgjsStop3503"
                                                                    stopOpacity="1"
                                                                    stopColor="rgba(242,242,242,1)"
                                                                    offset="0"
                                                                ></stop>
                                                                <stop
                                                                    id="SvgjsStop3504"
                                                                    stopOpacity="1"
                                                                    stopColor="rgba(41,121,255,1)"
                                                                    offset="1"
                                                                ></stop>
                                                                <stop
                                                                    id="SvgjsStop3505"
                                                                    stopOpacity="1"
                                                                    stopColor="rgba(41,121,255,1)"
                                                                    offset="1"
                                                                ></stop>
                                                            </linearGradient>
                                                            <linearGradient id="SvgjsLinearGradient3512">
                                                                <stop
                                                                    id="SvgjsStop3513"
                                                                    stopOpacity="1"
                                                                    stopColor="rgba(236,240,244,1)"
                                                                    offset="0"
                                                                ></stop>
                                                                <stop
                                                                    id="SvgjsStop3514"
                                                                    stopOpacity="1"
                                                                    stopColor="rgba(41,121,255,1)"
                                                                    offset="1"
                                                                ></stop>
                                                                <stop
                                                                    id="SvgjsStop3515"
                                                                    stopOpacity="1"
                                                                    stopColor="rgba(41,121,255,1)"
                                                                    offset="1"
                                                                ></stop>
                                                            </linearGradient>
                                                        </defs>
                                                        <g id="SvgjsG3498" className="apexcharts-radialbar">
                                                            <g id="SvgjsG3499">
                                                                <g id="SvgjsG3500" className="apexcharts-tracks">
                                                                    <g id="SvgjsG3501"
                                                                       className="apexcharts-radialbar-track apexcharts-track"
                                                                       rel="1">
                                                                        <path
                                                                            id="apexcharts-radialbarTrack-0"
                                                                            d="M 50 20.762195121951216 A 29.237804878048784 29.237804878048784 0 1 1 49.99489704041412 20.762195567268446"
                                                                            fill="none"
                                                                            fillOpacity="1"
                                                                            stroke="rgba(242,242,242,0.85)"
                                                                            strokeOpacity="1"
                                                                            strokeLinecap="butt"
                                                                            strokeWidth="5.524268292682928"
                                                                            strokeDasharray="0"
                                                                            className="apexcharts-radialbar-area"
                                                                        ></path>
                                                                    </g>
                                                                </g>
                                                                <g id="SvgjsG3507">
                                                                    <g id="SvgjsG3511"
                                                                       className="apexcharts-series apexcharts-radial-series"
                                                                       seriesName="seriesx1" rel="1" data-realIndex="0">
                                                                        <path
                                                                            id="SvgjsPath3516"
                                                                            d="M 50 20.762195121951216 A 29.237804878048784 29.237804878048784 0 1 1 26.346118975439794 32.814449483278"
                                                                            fill="none"
                                                                            fillOpacity="0.85"
                                                                            stroke="url(#SvgjsLinearGradient3512)"
                                                                            strokeOpacity="1"
                                                                            strokeLinecap="butt"
                                                                            strokeWidth="5.695121951219512"
                                                                            strokeDasharray="0"
                                                                            className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                                            data-angle="306"
                                                                            data-value="85"
                                                                            index="0"
                                                                            j="0"
                                                                        ></path>
                                                                    </g>
                                                                    <circle
                                                                        id="SvgjsCircle3508"
                                                                        r="21.47567073170732"
                                                                        cx="50"
                                                                        cy="50"
                                                                        className="apexcharts-radialbar-hollow"
                                                                        fill="transparent"
                                                                    ></circle>
                                                                    <g
                                                                        id="SvgjsG3509"
                                                                        className="apexcharts-datalabels-group"
                                                                        transform="translate(0, 0)"
                                                                        style={{opacity: 1}}
                                                                    >
                                                                        <text
                                                                            id="SvgjsText3510"
                                                                            fontFamily="Helvetica, Arial, sans-serif"
                                                                            x="50"
                                                                            y="55"
                                                                            textAnchor="middle"
                                                                            dominantBaseline="auto"
                                                                            fontSize="15px"
                                                                            fontWeight="400"
                                                                            fill="#333333"
                                                                            className="apexcharts-text apexcharts-datalabel-value"
                                                                        >
                                                                            85%
                                                                        </text>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <line id="SvgjsLine3517" x1="0" y1="0" x2="100" y2="0"
                                                              stroke="#b6b6b6" strokeDasharray="0" strokeWidth="1"
                                                              className="apexcharts-ycrosshairs"></line>
                                                        <line id="SvgjsLine3518" x1="0" y1="0" x2="100" y2="0"
                                                              strokeDasharray="0" strokeWidth="0"
                                                              className="apexcharts-ycrosshairs-hidden"></line>
                                                    </g>
                                                </svg>
                                                <div className="apexcharts-legend"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-data">
                                        <div className="h4 mb-0">$6060</div>
                                        <div className="weight-600 font-14">Worth</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 mb-30">
                            <div className="card-box height-100-p pd-20">
                                <h2 className="h4 mb-20">Activity</h2>
                                {/*<div id="chart5">*/}

                                {/*<LatestHits/>*/}
                                <Chart1/>
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-xl-4 mb-30">
                            <div className="card-box height-100-p pd-20">
                                <h2 className="h4 mb-20">Lead Target</h2>
                                <div id="chart6">
                                    <svg
                                        width="433"
                                        height="328.275"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        style={{background: 'transparent'}}
                                    >
                                        <g className="apexcharts-inner apexcharts-graphical"
                                           transform="translate(54.5, 0)">
                                            <defs>
                                                <clipPath id="gridRectMask2a87ec">
                                                    <rect
                                                        width="332"
                                                        height="350"
                                                        x="-3"
                                                        y="-1"
                                                        rx="0"
                                                        ry="0"
                                                        fill="#ffffff"
                                                        opacity="1"
                                                        strokeWidth="0"
                                                        stroke="none"
                                                        strokeDasharray="0"
                                                    ></rect>
                                                </clipPath>
                                                <clipPath id="gridRectMarkerMask2a87ec">
                                                    <rect
                                                        width="328"
                                                        height="350"
                                                        x="-1"
                                                        y="-1"
                                                        rx="0"
                                                        ry="0"
                                                        fill="#ffffff"
                                                        opacity="1"
                                                        strokeWidth="0"
                                                        stroke="none"
                                                        strokeDasharray="0"
                                                    ></rect>
                                                </clipPath>
                                                <linearGradient id="SvgjsLinearGradient1444" x1="1" y1="0" x2="0"
                                                                y2="1">
                                                    <stop stopOpacity="1" stopColor="rgba(242,242,242,1)"
                                                          offset="0"></stop>
                                                    <stop stopOpacity="1" stopColor="rgba(242,242,242,1)"
                                                          offset="0.5"></stop>
                                                    <stop stopOpacity="1" stopColor="rgba(242,242,242,1)"
                                                          offset="0.65"></stop>
                                                    <stop stopOpacity="1" stopColor="rgba(242,242,242,1)"
                                                          offset="0.91"></stop>
                                                </linearGradient>
                                                <linearGradient id="SvgjsLinearGradient1456" x1="1" y1="0" x2="0"
                                                                y2="1">
                                                    <stop stopOpacity="1" stopColor="rgba(11,19,43,1)"
                                                          offset="0"></stop>
                                                    <stop stopOpacity="1" stopColor="rgba(11,19,43,1)"
                                                          offset="0.5"></stop>
                                                    <stop stopOpacity="1" stopColor="rgba(11,19,43,1)"
                                                          offset="0.65"></stop>
                                                    <stop stopOpacity="1" stopColor="rgba(11,19,43,1)"
                                                          offset="0.91"></stop>
                                                </linearGradient>
                                            </defs>
                                            <g className="apexcharts-radialbar">
                                                <g>
                                                    <g className="apexcharts-tracks">
                                                        <g className="apexcharts-radialbar-track apexcharts-track"
                                                           rel="1">
                                                            <path
                                                                d="M 88.86157864327627 248.1384213567237 A 104.84756097560978 104.84756097560978 0 1 1 237.1384213567237 248.1384213567237"
                                                                fill="none"
                                                                fillOpacity="1"
                                                                stroke="rgba(242,242,242,0.85)"
                                                                strokeOpacity="1"
                                                                strokeLinecap="butt"
                                                                strokeWidth="34.86085365853659"
                                                                strokeDasharray="0"
                                                                className="apexcharts-radialbar-area"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g className="apexcharts-series apexcharts-radial-series"
                                                           seriesName="AchievexGoals" rel="1">
                                                            <path
                                                                d="M 88.86157864327627 248.1384213567237 A 104.84756097560978 104.84756097560978 0 1 1 255.57490158054424 124.77705169449149"
                                                                fill="none"
                                                                fillOpacity="0.85"
                                                                stroke="url(#SvgjsLinearGradient1456)"
                                                                strokeOpacity="1"
                                                                strokeLinecap="butt"
                                                                strokeWidth="35.93902439024391"
                                                                strokeDasharray="4"
                                                                className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                            ></path>
                                                        </g>
                                                        <circle
                                                            r="82.41713414634148"
                                                            cx="163"
                                                            cy="174"
                                                            className="apexcharts-radialbar-hollow"
                                                            fill="transparent"
                                                        ></circle>
                                                        <g className="apexcharts-datalabels-group"
                                                           transform="translate(0, 0) scale(1)" style={{opacity: 1}}>
                                                            <text
                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                x="163"
                                                                y="294"
                                                                textAnchor="middle"
                                                                dominantBaseline="auto"
                                                                fontSize="16px"
                                                                fontWeight="400"
                                                                fill="#0b132b"
                                                                className="apexcharts-text apexcharts-datalabel-label"
                                                                style={{fontFamily: 'Helvetica, Arial, sans-serif'}}
                                                            >
                                                                Achieve Goals
                                                            </text>
                                                            <text
                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                x="163"
                                                                y="266"
                                                                textAnchor="middle"
                                                                dominantBaseline="auto"
                                                                fontSize="22px"
                                                                fontWeight="400"
                                                                fill="#373d3f"
                                                                className="apexcharts-text apexcharts-datalabel-value"
                                                                style={{fontFamily: 'Helvetica, Arial, sans-serif'}}
                                                            >
                                                                73%
                                                            </text>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <line x1="0" y1="0" x2="326" y2="0" stroke="#b6b6b6" strokeDasharray="0"
                                                  strokeWidth="1" className="apexcharts-ycrosshairs"></line>
                                            <line x1="0" y1="0" x2="326" y2="0" strokeDasharray="0" strokeWidth="0"
                                                  className="apexcharts-ycrosshairs-hidden"></line>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-box mb-30">
                        <h2 className="h4 pd-20">Best Selling Products</h2>
                        <table className="data-table table nowrap">
                            <thead>
                            <tr>
                                <th className="table-plus datatable-nosort">Product</th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Oty</th>
                                <th className="datatable-nosort">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="table-plus">
                                    <img src="/images/product-1.jpg" width="70" height="70" alt=""/>
                                </td>
                                <td>
                                    <h5 className="font-16">Shirt</h5>
                                    by John Doe
                                </td>
                                <td>Black</td>
                                <td>M</td>
                                <td>$1000</td>
                                <td>1</td>
                                <td>
                                    <div className="dropdown">
                                        <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                                           href="#" role="button" data-toggle="dropdown">
                                            <i className="dw dw-more"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                            <a className="dropdown-item" href="#"><i className="dw dw-eye"></i> View</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-edit2"></i> Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-delete-3"></i> Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-plus">
                                    <img src="/images/product-2.jpg" width="70" height="70" alt=""/>
                                </td>
                                <td>
                                    <h5 className="font-16">Boots</h5>
                                    by Lea R. Frith
                                </td>
                                <td>brown</td>
                                <td>9UK</td>
                                <td>$900</td>
                                <td>1</td>
                                <td>
                                    <div className="dropdown">
                                        <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                                           href="#" role="button" data-toggle="dropdown">
                                            <i className="dw dw-more"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                            <a className="dropdown-item" href="#"><i className="dw dw-eye"></i> View</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-edit2"></i> Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-delete-3"></i> Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-plus">
                                    <img src="/images/product-3.jpg" width="70" height="70" alt=""/>
                                </td>
                                <td>
                                    <h5 className="font-16">Hat</h5>
                                    by Erik L. Richards
                                </td>
                                <td>Orange</td>
                                <td>M</td>
                                <td>$100</td>
                                <td>4</td>
                                <td>
                                    <div className="dropdown">
                                        <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                                           href="#" role="button" data-toggle="dropdown">
                                            <i className="dw dw-more"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                            <a className="dropdown-item" href="#"><i className="dw dw-eye"></i> View</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-edit2"></i> Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-delete-3"></i> Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-plus">
                                    <img src="/images/product-4.jpg" width="70" height="70" alt=""/>
                                </td>
                                <td>
                                    <h5 className="font-16">Long Dress</h5>
                                    by Renee I. Hansen
                                </td>
                                <td>Gray</td>
                                <td>L</td>
                                <td>$1000</td>
                                <td>1</td>
                                <td>
                                    <div className="dropdown">
                                        <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                                           href="#" role="button" data-toggle="dropdown">
                                            <i className="dw dw-more"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                            <a className="dropdown-item" href="#"><i className="dw dw-eye"></i> View</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-edit2"></i> Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-delete-3"></i> Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-plus">
                                    <img src="/images/product-5.jpg" width="70" height="70" alt=""/>
                                </td>
                                <td>
                                    <h5 className="font-16">Blazer</h5>
                                    by Vicki M. Coleman
                                </td>
                                <td>Blue</td>
                                <td>M</td>
                                <td>$1000</td>
                                <td>1</td>
                                <td>
                                    <div className="dropdown">
                                        <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                                           href="#" role="button" data-toggle="dropdown">
                                            <i className="dw dw-more"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                            <a className="dropdown-item" href="#"><i className="dw dw-eye"></i> View</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-edit2"></i> Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="dw dw-delete-3"></i> Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*<div className="footer-wrap pd-20 mb-20 card-box">*/}
                    {/*    DeskApp - Bootstrap 4 Admin Template By <a href="https://github.com/dropways"*/}
                    {/*                                               target="_blank">Ankit*/}
                    {/*    Hingarajiya</a>*/}
                    {/*</div>*/}
                </div>
            </div>

            {/*<div className="right-sidebar">*/}
            {/*    <div className="sidebar-title">*/}
            {/*        <h3 className="weight-600 font-16 text-blue">*/}
            {/*            Layout Settings*/}
            {/*            <span className="btn-block font-weight-400 font-12">User Interface Settings</span>*/}
            {/*        </h3>*/}
            {/*        <div className="close-sidebar" data-toggle="right-sidebar-close">*/}
            {/*            <i className="icon-copy ion-close-round"></i>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="right-sidebar-body customscroll">*/}
            {/*        <div className="right-sidebar-body-content">*/}
            {/*            <h4 className="weight-600 font-18 pb-10">Header Background</h4>*/}
            {/*            <div className="sidebar-btn-group pb-30 mb-10">*/}
            {/*                <a href="javascript:void(0);" className="btn btn-outline-primary header-white active">White</a>*/}
            {/*                <a href="javascript:void(0);" className="btn btn-outline-primary header-dark">Dark</a>*/}
            {/*            </div>*/}

            {/*            <h4 className="weight-600 font-18 pb-10">Sidebar Background</h4>*/}
            {/*            <div className="sidebar-btn-group pb-30 mb-10">*/}
            {/*                <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-light ">White</a>*/}
            {/*                <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-dark active">Dark</a>*/}
            {/*            </div>*/}

            {/*            <h4 className="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>*/}
            {/*            <div className="sidebar-radio-group pb-10 mb-10">*/}
            {/*                <div className="custom-control custom-radio custom-control-inline">*/}
            {/*                    <input type="radio" id="sidebaricon-1" name="menu-dropdown-icon"*/}
            {/*                           className="custom-control-input" value="icon-style-1" checked=""/>*/}
            {/*                    <label className="custom-control-label" htmlFor="sidebaricon-1"><i*/}
            {/*                        className="fa fa-angle-down"></i></label>*/}
            {/*                </div>*/}
            {/*                <div className="custom-control custom-radio custom-control-inline">*/}
            {/*                    <input type="radio" id="sidebaricon-2" name="menu-dropdown-icon"*/}
            {/*                           className="custom-control-input" value="icon-style-2"/>*/}
            {/*                    <label className="custom-control-label" htmlFor="sidebaricon-2"><i*/}
            {/*                        className="ion-plus-round"></i></label>*/}
            {/*                </div>*/}
            {/*                <div className="custom-control custom-radio custom-control-inline">*/}
            {/*                    <input type="radio" id="sidebaricon-3" name="menu-dropdown-icon"*/}
            {/*                           className="custom-control-input" value="icon-style-3"/>*/}
            {/*                    <label className="custom-control-label" htmlFor="sidebaricon-3"><i*/}
            {/*                        className="fa fa-angle-double-right"></i></label>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <h4 className="weight-600 font-18 pb-10">Menu List Icon</h4>*/}
            {/*            <div className="sidebar-radio-group pb-30 mb-10">*/}
            {/*                <div className="custom-control custom-radio custom-control-inline">*/}
            {/*                    <input type="radio" id="sidebariconlist-1" name="menu-list-icon"*/}
            {/*                           className="custom-control-input" value="icon-list-style-1" checked=""/>*/}
            {/*                    <label className="custom-control-label" htmlFor="sidebariconlist-1"><i*/}
            {/*                        className="ion-minus-round"></i></label>*/}
            {/*                </div>*/}
            {/*                <div className="custom-control custom-radio custom-control-inline">*/}
            {/*                    <input type="radio" id="sidebariconlist-2" name="menu-list-icon"*/}
            {/*                           className="custom-control-input" value="icon-list-style-2"/>*/}
            {/*                    <label className="custom-control-label" htmlFor="sidebariconlist-2"><i*/}
            {/*                        className="fa fa-circle-o" aria-hidden="true"></i></label>*/}
            {/*                </div>*/}
            {/*                <div className="custom-control custom-radio custom-control-inline">*/}
            {/*                    <input type="radio" id="sidebariconlist-3" name="menu-list-icon"*/}
            {/*                           className="custom-control-input" value="icon-list-style-3"/>*/}
            {/*                    <label className="custom-control-label" htmlFor="sidebariconlist-3"><i*/}
            {/*                        className="dw dw-check"></i></label>*/}
            {/*                </div>*/}
            {/*                <div className="custom-control custom-radio custom-control-inline">*/}
            {/*                    <input type="radio" id="sidebariconlist-4" name="menu-list-icon"*/}
            {/*                           className="custom-control-input" value="icon-list-style-4" checked=""/>*/}
            {/*                    <label className="custom-control-label" htmlFor="sidebariconlist-4"><i*/}
            {/*                        className="icon-copy dw dw-next-2"></i></label>*/}
            {/*                </div>*/}
            {/*                <div className="custom-control custom-radio custom-control-inline">*/}
            {/*                    <input type="radio" id="sidebariconlist-5" name="menu-list-icon"*/}
            {/*                           className="custom-control-input" value="icon-list-style-5"/>*/}
            {/*                    <label className="custom-control-label" htmlFor="sidebariconlist-5"><i*/}
            {/*                        className="dw dw-fast-forward-1"></i></label>*/}
            {/*                </div>*/}
            {/*                <div className="custom-control custom-radio custom-control-inline">*/}
            {/*                    <input type="radio" id="sidebariconlist-6" name="menu-list-icon"*/}
            {/*                           className="custom-control-input" value="icon-list-style-6"/>*/}
            {/*                    <label className="custom-control-label" htmlFor="sidebariconlist-6"><i*/}
            {/*                        className="dw dw-next"></i></label>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="reset-options pt-30 text-center">*/}
            {/*                <button className="btn btn-danger" id="reset-settings">Reset Settings</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="left-side-bar">
                <div className="brand-logo">
                    <a href="index.html">
                        <img src="/images/deskapp-logo.svg" alt="" className="dark-logo"/>
                        <img src="/images/deskapp-logo-white.svg" alt="" className="light-logo"/>
                    </a>
                    <div className="close-sidebar" data-toggle="left-sidebar-close">
                        <i className="ion-close-round"></i>
                    </div>
                </div>

                <div className="menu-block customscroll">

                    <div className="sidebar-menu">
                        <ul id="accordion-menu">

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <FontAwesomeIcon icon={faHouse}/><span> </span>
                                    <span className="micon dw dw-house-1"></span><span className="mtext">Home</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="index.html">Dashboard style 1</a></li>
                                    <li><a href="index2.html">Dashboard style 2</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-edit2"></span><span className="mtext">Forms</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="form-basic.html">Form Basic</a></li>
                                    <li><a href="advanced-components.html">Advanced Components</a></li>
                                    <li><a href="form-wizard.html">Form Wizard</a></li>
                                    <li><a href="html5-editor.html">HTML5 Editor</a></li>
                                    <li><a href="form-pickers.html">Form Pickers</a></li>
                                    <li><a href="image-cropper.html">Image Cropper</a></li>
                                    <li><a href="image-dropzone.html">Image Dropzone</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-library"></span><span className="mtext">Tables</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="basic-table.html">Basic Tables</a></li>
                                    <li><a href="datatable.html">DataTables</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="calendar.html" className="dropdown-toggle no-arrow">
                                    <span className="micon dw dw-calendar1"></span><span
                                    className="mtext">Calendar</span>
                                </a>
                            </li>

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-apartment"></span><span
                                    className="mtext"> UI Elements </span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="ui-buttons.html">Buttons</a></li>
                                    <li><a href="ui-cards.html">Cards</a></li>
                                    <li><a href="ui-cards-hover.html">Cards Hover</a></li>
                                    <li><a href="ui-modals.html">Modals</a></li>
                                    <li><a href="ui-tabs.html">Tabs</a></li>
                                    <li><a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a></li>
                                    <li><a href="ui-sweet-alert.html">Sweet Alert</a></li>
                                    <li><a href="ui-notification.html">Notification</a></li>
                                    <li><a href="ui-timeline.html">Timeline</a></li>
                                    <li><a href="ui-progressbar.html">Progressbar</a></li>
                                    <li><a href="ui-typography.html">Typography</a></li>
                                    <li><a href="ui-list-group.html">List group</a></li>
                                    <li><a href="ui-range-slider.html">Range slider</a></li>
                                    <li><a href="ui-carousel.html">Carousel</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-paint-brush"></span><span
                                    className="mtext">Icons</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="font-awesome.html">FontAwesome Icons</a></li>
                                    <li><a href="foundation.html">Foundation Icons</a></li>
                                    <li><a href="ionicons.html">Ionicons Icons</a></li>
                                    <li><a href="themify.html">Themify Icons</a></li>
                                    <li><a href="custom-icon.html">Custom Icons</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-analytics-21"></span><span
                                    className="mtext">Charts</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="highchart.html">Highchart</a></li>
                                    <li><a href="knob-chart.html">jQuery Knob</a></li>
                                    <li><a href="jvectormap.html">jvectormap</a></li>
                                    <li><a href="apexcharts.html">Apexcharts</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-right-arrow1"></span><span className="mtext">Additional Pages</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="video-player.html">Video Player</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="forgot-password.html">Forgot Password</a></li>
                                    <li><a href="reset-password.html">Reset Password</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-browser2"></span><span
                                    className="mtext">Error Pages</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="400.html">400</a></li>
                                    <li><a href="403.html">403</a></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><a href="500.html">500</a></li>
                                    <li><a href="503.html">503</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-copy"></span><span className="mtext">Extra Pages</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="blank.html">Blank</a></li>
                                    <li><a href="contact-directory.html">Contact Directory</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-detail.html">Blog Detail</a></li>
                                    <li><a href="product.html">Product</a></li>
                                    <li><a href="product-detail.html">Product Detail</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="profile.html">Profile</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="pricing-table.html">Pricing Tables</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-list3"></span><span
                                    className="mtext">Multi Level Menu</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="javascript:;">Level 1</a></li>
                                    <li><a href="javascript:;">Level 1</a></li>
                                    <li><a href="javascript:;">Level 1</a></li>
                                    <li className="dropdown">
                                        <a href="javascript:;" className="dropdown-toggle">
                                            <span className="micon fa fa-plug"></span><span
                                            className="mtext">Level 2</span>
                                        </a>
                                        <ul className="submenu child">
                                            <li><a href="javascript:;">Level 2</a></li>
                                            <li><a href="javascript:;">Level 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:;">Level 1</a></li>
                                    <li><a href="javascript:;">Level 1</a></li>
                                    <li><a href="javascript:;">Level 1</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="sitemap.html" className="dropdown-toggle no-arrow">
                                    <span className="micon dw dw-diagram"></span><span className="mtext">Sitemap</span>
                                </a>
                            </li>

                            <li>
                                <a href="chat.html" className="dropdown-toggle no-arrow">
                                    <FontAwesomeIcon icon={faMessage}/><span>  </span>
                                    <span className="micon dw dw-chat3"></span><span className="mtext">Chat</span>
                                </a>
                            </li>

                            <li>
                                <a href="invoice.html" className="dropdown-toggle no-arrow">
                                    <span className="micon dw dw-invoice"></span><span className="mtext">Invoice</span>
                                </a>
                            </li>

                            <li>
                                <div className="dropdown-divider"></div>
                            </li>

                            <li>
                                <div className="sidebar-small-cap">Extra</div>
                            </li>

                            <li>
                                <a href="javascript:;" className="dropdown-toggle">
                                    <span className="micon dw dw-edit-2"></span><span
                                    className="mtext">Documentation</span>
                                </a>
                                <ul className="submenu">
                                    <li><a href="introduction.html">Introduction</a></li>
                                    <li><a href="getting-started.html">Getting Started</a></li>
                                    <li><a href="color-settings.html">Color Settings</a></li>
                                    <li><a href="third-party-plugins.html">Third Party Plugins</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="https://dropways.github.io/deskapp-free-single-page-website-template/"
                                   target="_blank" className="dropdown-toggle no-arrow">
                                    <span className="micon dw dw-paper-plane1"></span>
                                    <span className="mtext">Landing Page <img src="/images/coming-soon.png" alt=""
                                                                              width="25"/></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;