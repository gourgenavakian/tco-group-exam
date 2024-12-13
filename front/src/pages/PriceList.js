import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsDataRequest} from "../store/actions/productsDataActions";
import {Link} from "react-router-dom";


function PriceList(props) {

    const dispatch = useDispatch();
    const { productsData } = useSelector((state) => state.productsData);

    useEffect(() => {
        dispatch(fetchProductsDataRequest());
    }, [dispatch]);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="col-md-7 mb-30">
                <h4 className="mb-30 mt-30 text-blue h4">Pricing Table</h4>
                <div className="row">

                    {productsData.map(product => (
                        <div className="col-md-4 mb-30" key={product._id}>
                            <div className="card-box pricing-card mt-30 mb-30">
                                <div className="pricing-icon">
                                    <img src="/images/icon-debit.png" alt=""/>
                                </div>
                                <div className="price-title">
                                    {product.name}
                                </div>
                                <div className="pricing-price">
                                    <sup>$</sup>{product.price}<sub>/mo</sub>
                                </div>
                                <div className="text">
                                    Card servicing<br/> for {product.duration } days
                                </div>
                                <div className="cta">
                                    <Link to={`/users/registration?product=${product._id}`} className="btn btn-primary btn-rounded btn-lg">Order Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default PriceList;