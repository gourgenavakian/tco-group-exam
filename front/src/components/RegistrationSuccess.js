import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";



function RegistrationSuccess() {

    const {status, error} = useSelector(state => state.registerUsers);

    return (
        <div className="modal-dialog modal-dialog-centered max-width-400" id="success-modal" tabIndex="1" role="dialog"
             style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",height: '30%', background: "whitesmoke", borderRadius:"5px"}}
             aria-labelledby="exampleModalCenterTitle">
            <div className="modal-dialog modal-dialog-centered max-width-400" role="document">
                <div className="modal-content">
                    <div className="modal-body text-center font-18">
                        <h3 className="mb-20">Form Submitted!</h3>
                        <div className="mb-30 text-center"><img src="/images/success.png" alt=''/></div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    </div>
                    <div className="modal-footer justify-content-center">
                        <Link to="/login" className="btn btn-primary">Done</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationSuccess;