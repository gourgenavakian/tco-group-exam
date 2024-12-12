import React, {useEffect} from 'react';
import Chart1 from "../components/Chart";
import Wrapper from "../components/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequest } from "../store/actions/profileDataActions";
import PreLoader from "../components/PreLoader";
import ProductsTable from "../components/ProductsTable";


function Dashboard(props) {

    const dispatch = useDispatch();
    const { data, error, loading } = useSelector((state) => state.data);
    console.log(loading);

    useEffect(() => {
        console.log("useEffect triggered");
        if (!data && !loading) {
            console.log("Dispatching fetchDataRequest");
            dispatch(fetchDataRequest());
        }
    }, [data, loading]);

    if (loading && !data) {
        console.log(loading)
        return <PreLoader />;
    }

    if (error && !data) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="dashboard-container" style={{display: 'flex', flexDirection: 'column'}}>

            <Wrapper>

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
                                    Welcome back <div className="weight-600 font-30 text-blue">{data.fullName}!</div>
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
                                                xmlnssvgjs="http://svgjs.com/svgjs"
                                                className="apexcharts-svg"
                                                xmlnsdata="ApexChartsNS"
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
                                                xmlnssvgjs="http://svgjs.com/svgjs"
                                                className="apexcharts-svg"
                                                xmlnsdata="ApexChartsNS"
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
                                                                    seriesname="seriesx1"
                                                                    rel="1"
                                                                    datarealindex="0"
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
                                                                        dataangle="270"
                                                                        datavalue="75"
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
                                                xmlnssvgjs="http://svgjs.com/svgjs"
                                                className="apexcharts-svg"
                                                xmlnsdata="ApexChartsNS"
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
                                                                   seriesname="seriesx1" rel="1"
                                                                >
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
                                                    xmlnssvgjs="http://svgjs.com/svgjs"
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
                                                                       seriesname="seriesx1" rel="1">
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
                                                           seriesname="AchievexGoals" rel="1">
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

                    <ProductsTable/>
                </div>
            </div>

            </Wrapper>
        </div>

    );
}

export default Dashboard;