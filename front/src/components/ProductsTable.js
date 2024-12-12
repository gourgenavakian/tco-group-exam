import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsDataRequest} from "../store/actions/productsDataActions";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faDeleteLeft, faEdit} from "@fortawesome/free-solid-svg-icons";

function ProductsTable() {

    const [activeProductId, setActiveProductId] = useState(null);

    const dispatch = useDispatch();
    const {productsData, error, loading} = useSelector(state => state.productsData);

    useEffect(() => {
        dispatch(fetchProductsDataRequest());
    }, [dispatch]);

    const toggleActions = (productId) => {
        setActiveProductId(activeProductId === productId ? null : productId);
    };

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
                    <th>Available</th>
                </tr>
                </thead>
                <tbody>
                {productsData.map(product => (
                    <React.Fragment key={product._id}>
                        <tr>
                            <td className="table-plus">
                                <FontAwesomeIcon onClick={() => toggleActions(product._id)} icon={faChevronDown}/>
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
                                {product.isActive ?
                                <span className="badge" style={{backgroundColor: 'mediumseagreen'}}>Available</span> :
                                <span className="badge" style={{backgroundColor: 'gray'}}>Not available</span>}
                            </td>
                        </tr>

                        {
                            activeProductId === product._id &&
                            <ul key={product._id} data-dtr-index="1" className="dtr-details">
                            <li data-dtr-index="6" data-dt-row="1" data-dt-column="6">
                                <span className="dtr-data">
									<div className=" dropdown-menu-icon-list">
										<Link className="dropdown-item" to="#">
                                            <FontAwesomeIcon icon={faEdit}/>
                                             Edit
                                        </Link>
										<Link className="dropdown-item" to="#">
                                            <FontAwesomeIcon icon={faDeleteLeft}/>
                                            Delete
                                        </Link>
									</div>
                                </span>
                            </li>
                        </ul>
                        }
                    </React.Fragment>

                ))}
                </tbody>
            </table>
        </div>

    );
}

export default ProductsTable;