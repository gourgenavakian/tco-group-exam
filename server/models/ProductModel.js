const InternetPackage = require('../config/productDB')


class ProductModel {

    static attachProduct = async (user) => {

        console.log(user);
        console.log(user.productId)
        const product = await InternetPackage.findOne({ _id: user.productId });

        if (!product) {
            console.log('Product not found');
            return null;
        }


        const purchase = {
            productId: product._id,
            price: product.price,
            quantity: user.quantity,
            totalPrice: product.price * user.quantity,
            status: product.status,
        };

        console.log('Purchase details:', purchase);

        return purchase;
    }
}

module.exports = ProductModel;