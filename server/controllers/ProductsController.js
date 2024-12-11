const mongoose = require('mongoose');
const InternetPackage = require('../config/productDB');
const {Types} = require("mongoose");

class ProductsController {

    static getProducts = async (req, res) => {
        try {
            const product = await InternetPackage.find();
            return res.status(200).json(product);
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Failed to retrieve users'});
        }
    };


    static createProduct = async (req, res) => {
        try {

            const {
                name,
                speed,
                dataLimit,
                price,
                description,
                duration,
                isActive,
                createdBy,
            } = req.body;

            if (!name || !speed || !dataLimit || !price || !duration || !createdBy) {
                return res.status(400).json({
                    success: false,
                    message: "All required fields (name, speed, dataLimit, price, duration) must be provided.",
                });
            }

            const product = new InternetPackage({
                name,
                speed,
                dataLimit,
                price,
                description,
                duration,
                isActive: isActive !== undefined ? isActive : true,
                createdBy:  new Types.ObjectId(createdBy)
            });

            const savedProduct = await product.save();

            return res.status(201).json({
                success: true,
                message: "Product created successfully.",
                product: savedProduct,
            });
        } catch (error) {
            console.error("Error creating product:", error);

            return res.status(500).json({
                success: false,
                message: "An error occurred while creating the product.",
                error: error.message,
            });
        }
    };

    static updateProduct = async (req, res) => {
    };

    static deleteProduct = async (req, res) => {
    };
}

module.exports = ProductsController;