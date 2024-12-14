import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDataRequest } from "../store/actions/allUsersDataActions";
import useLocalStorage from "../helpers/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import Fuse from "fuse.js";

function AllUsersList() {

    const [userID] = useLocalStorage("userID");
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const dispatch = useDispatch();
    const { allData, error, loading } = useSelector((state) => state.allData);

    console.log(allData)

    useEffect(() => {
        dispatch(fetchAllDataRequest());
    }, [dispatch]);

    const users = allData.filter(user => {
        return user.role !== 'admin' && user.role !== 'manager' && user.createdBy === userID
    }).sort((a, b) => {
        const totalA = a.purchases.reduce((acc, purchase) => acc + purchase.totalPrice, 0);
        const totalB = b.purchases.reduce((acc, purchase) => acc + purchase.totalPrice, 0);
        return totalA - totalB;
    });

    const fuse = new Fuse(users, {
        keys: ['fullName', 'username', 'email'],
        threshold: 0.3,
    });

    const filteredUsers = searchTerm
        ? fuse.search(searchTerm).map(result => result.item)
        : users;

    const handleDateFilter = (user) => {
        const registrationDate = new Date(user.createdAt);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        if (start && registrationDate < start) return false;
        return !(end && registrationDate > end);


    };

    const finalFilteredUsers = filteredUsers.filter(handleDateFilter);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

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
                    </div>
                </div>

                <div className="pd-20 card-box mb-30">
                    <div className="clearfix mb-20">
                        <div className="header-left">
                            <div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
                            <div className="header-search">
                                <form>
                                    <div className="form-group mb-0">
                                        <FontAwesomeIcon className="dw dw-search2 search-icon" icon={faSearch} />
                                        <input
                                            type="text"
                                            className="form-control search-input"
                                            placeholder="Search Here"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                        <div className="dropdown">
                                            <Link className="dropdown-toggle no-arrow" to="#" role="button" data-toggle="dropdown">
                                                <FontAwesomeIcon className="ion-arrow-down-c" icon={faArrowAltCircleDown} />
                                            </Link>
                                        </div>
                                        <div className="dropdown-menu-right">
                                            <Link to="#" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button" style={{ margin: '20px 0 20px 0' }}>
                                                <FontAwesomeIcon icon={faFilter} /> Filters
                                            </Link>
                                            <input
                                                className="form-control search-input"
                                                type="date"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                            />
                                            <span className="text-blue h6">to</span>
                                            <input
                                                className="form-control search-input"
                                                type="date"
                                                value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
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
                                finalFilteredUsers.map((user, index) => (
                                    <tr key={user._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.fullName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td><span className="badge badge-primary">Primary</span></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default AllUsersList;
