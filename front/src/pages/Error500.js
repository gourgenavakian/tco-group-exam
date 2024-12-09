import React from 'react';
import {Link} from "react-router-dom";

function Error500() {
    return (
        <div className="error-page d-flex align-items-center flex-wrap justify-content-center pd-20">
            <div className="pd-10">
                <div className="error-page-wrap text-center">
                    <h1>500</h1>
                    <h3>Error: 500 Unexpected Error</h3>
                    <p>An error ocurred and your request couldn’t be completed..<br/>Either check the URL</p>
                    <div className="pt-20 mx-auto max-width-200">
                        <Link to="/login" className="btn btn-primary btn-block btn-lg">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error500;