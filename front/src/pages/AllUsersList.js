import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Wrapper from "../components/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllDataRequest} from "../store/actions/allUsersDataActions";

function AllUsersList(props) {

    const dispatch = useDispatch();
    const {allData, error} = useSelector((state) => state.allData);

    useEffect(() => {
        dispatch(fetchAllDataRequest());
    }, [dispatch]);

    return (
        <Wrapper>

            <div className="main-container">

                <div className="page-header">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="title">
                                <h4>Users</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Users List</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right">
                            <div className="dropdown">
                                <Link className="btn btn-primary dropdown-toggle" to="#" role="button"
                                   data-toggle="dropdown">
                                    January 2018
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Export List</a>
                                    <a className="dropdown-item" href="#">Policies</a>
                                    <a className="dropdown-item" href="#">View Assets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pd-20 card-box mb-30">
                    <div className="clearfix mb-20">
                        <div className="pull-left">
                            <h4 className="text-blue h4">Users List</h4>
                            <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table
                                responsive
                                across all viewports by wrapping a <code>.table .table-responsive</code> Or, pick a
                                maximum
                                breakpoint with which to have a responsive table up to by
                                using.</p>
                        </div>
                        <div className="pull-right">
                            <Link to="#responsive-table" className="btn btn-primary btn-sm scroll-click" rel="content-y"
                                  data-toggle="collapse" role="button"><i className="fa fa-code"></i> Source Code</Link>
                        </div>
                    </div>
                    <div className="table-responsive">


                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                allData.map((user, index) => (
                                    <tr key={user._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.fullName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td><span className="badge badge-primary">Primary</span></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><span className="badge badge-primary">Primary</span></td>
                            </tr>
                            {/*<tr>*/}
                            {/*    <th scope="row">2</th>*/}
                            {/*    <td>Jacob</td>*/}
                            {/*    <td>Thornton</td>*/}
                            {/*    <td>@fat</td>*/}
                            {/*    <td><span className="badge badge-secondary">Secondary</span></td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*    <th scope="row">3</th>*/}
                            {/*    <td>Larry</td>*/}
                            {/*    <td>the Bird</td>*/}
                            {/*    <td>@twitter</td>*/}
                            {/*    <td><span className="badge badge-success">Success</span></td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*    <th scope="row">2</th>*/}
                            {/*    <td>Jacob</td>*/}
                            {/*    <td>Thornton</td>*/}
                            {/*    <td>@fat</td>*/}
                            {/*    <td><span className="badge badge-secondary">Secondary</span></td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*    <th scope="row">3</th>*/}
                            {/*    <td>Larry</td>*/}
                            {/*    <td>the Bird</td>*/}
                            {/*    <td>@twitter</td>*/}
                            {/*    <td><span className="badge badge-success">Success</span></td>*/}
                            {/*</tr>*/}
                            </tbody>
                        </table>


                    </div>
                    <div className="collapse collapse-box" id="responsive-table">
                        <div className="code-box">
                            <div className="clearfix">
                                <Link to="#" className="btn btn-primary btn-sm code-copy pull-left"
                                      data-clipboard-target="#responsive-table-code"><i
                                    className="fa fa-clipboard"></i> Copy Code</Link>
                                <Link to="#responsive-table" className="btn btn-primary btn-sm pull-right"
                                      rel="content-y"
                                      data-toggle="collapse" role="button"><i className="fa fa-eye-slash"></i> Hide
                                    Code</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Wrapper>
    );
}

export default AllUsersList;