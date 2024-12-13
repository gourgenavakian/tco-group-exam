import React, { useState } from 'react';
import Wrapper from "../components/Wrapper";
import axios from "axios";
import useLocalStorage from "../helpers/useLocalStorage";
import Select from "react-select";

const ProductCreateForm = () => {

    const [, getUserID] = useLocalStorage("userID");
    const [productInfo, setProductInfo] = useState({
        name: '',
        speed: '',
        dataLimit: '',
        price: '',
        description: '',
        duration: '',
        isActive: true,
        createdBy: getUserID(),
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        setProductInfo((prevInfo) => ({
            ...prevInfo,
            isActive: e.target.checked,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8088/products', productInfo);
            console.log(response)
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
                                <div className="col-md-6 col-sm-12">
                                    <div className="title">
                                        <h4>Add Internet Package</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border-radius-4 box-shadow mb-30">
                            <div className="pd-20">
                                <form onSubmit={handleSubmit}>
                                    {/* Package name */}
                                    <div className="form-group">
                                        <label htmlFor="name">Package Name*</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Package Name"
                                            value={productInfo.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Package name */}
                                    <div className="form-group">
                                        <label htmlFor="status">Package Status*</label>
                                        <Select
                                            options={[
                                                { value: 'primary', label: 'Primary' },
                                                { value: 'secondary', label: 'Secondary' },
                                                { value: 'third', label: 'Third' },
                                                { value: 'inactive', label: 'Inactive' }
                                            ]}
                                            onChange={(option) => {
                                                setProductInfo((prevInfo) => ({
                                                    ...prevInfo,
                                                    status: option.value
                                                }));
                                            }}
                                        />
                                    </div>

                                    {/* Speed */}
                                    <div className="form-group">
                                        <label htmlFor="speed">Speed*</label>
                                        <input
                                            type="text"
                                            name="speed"
                                            className="form-control"
                                            id="speed"
                                            placeholder="Enter Speed"
                                            value={productInfo.speed}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Data Limit */}
                                    <div className="form-group">
                                        <label htmlFor="dataLimit">Data Limit*</label>
                                        <input
                                            type="text"
                                            name="dataLimit"
                                            className="form-control"
                                            id="dataLimit"
                                            placeholder="Enter Data Limit"
                                            value={productInfo.dataLimit}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Price */}
                                    <div className="form-group">
                                        <label htmlFor="price">Price*</label>
                                        <input
                                            type="number"
                                            name="price"
                                            className="form-control"
                                            id="price"
                                            placeholder="Enter Price"
                                            value={productInfo.price}
                                            onChange={handleChange}
                                            required
                                            min="0"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            name="description"
                                            className="form-control"
                                            id="description"
                                            placeholder="Enter Description"
                                            value={productInfo.description}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Duration */}
                                    <div className="form-group">
                                        <label htmlFor="duration">Duration*</label>
                                        <input
                                            type="number"
                                            name="duration"
                                            className="form-control"
                                            id="duration"
                                            placeholder="Enter Duration"
                                            value={productInfo.duration}
                                            onChange={handleChange}
                                            required
                                            min="1"
                                        />
                                    </div>

                                    {/* Activity status */}
                                    <div className="form-group">
                                        <label htmlFor="isActive">Active</label>
                                        <input
                                            type="checkbox"
                                            name="isActive"
                                            id="isActive"
                                            checked={productInfo.isActive}
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>

                                    <hr className="my-4"/>
                                    <button type="submit" className="btn btn-success btn-block">
                                        Save Package
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ProductCreateForm;
