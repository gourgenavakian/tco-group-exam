import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsDataRequest} from "../store/actions/productsDataActions";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faChevronDown} from "@fortawesome/free-solid-svg-icons";

function ProductsTable() {

    const dispatch = useDispatch();
    const {productsData, error, loading} = useSelector(state => state.productsData);

    useEffect(() => {
        dispatch(fetchProductsDataRequest());
    }, [dispatch]);

    return (
        <div className="card-box mb-30">
            <h2 className="h4 pd-20">Best Selling Products</h2>
            <table className="data-table table nowrap">
                <thead>
                <tr>
                    <th className="table-plus datatable-nosort">Product</th>
                    <th>Name</th>
                    <th>Speed/Mbs</th>
                    <th>Data Limit/Gb</th>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {productsData.map(product => (
                    <tr key={product._id}>
                        <td className="table-plus">
                            <FontAwesomeIcon icon={faChevronDown}/>
                            <img src="/images/pngegg.png" style={{width: '70px', height: '70px'}} alt=""/>
                        </td>
                        <td>
                            <h5 className="font-16">{product.name}</h5>
                            by Admin
                        </td>
                        <td>{product.speed}</td>
                        <td>{product.dataLimit}</td>
                        <td>${product.price}</td>
                        <td>For {product.duration} days</td>
                        <td>
                            <div className="dropdown">
                                <Link className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                                   to="#" role="button" data-toggle="dropdown">
                                    <i className="dw dw-more"></i>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                    <Link className="dropdown-item" to="#"><i className="dw dw-eye"></i> View</Link>
                                    <Link className="dropdown-item" to="#"><i
                                        className="dw dw-edit2"></i> Edit</Link>
                                    <Link className="dropdown-item" to="#"><i
                                        className="dw dw-delete-3"></i> Delete</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}

export default ProductsTable;