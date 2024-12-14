const InternetPackage = require('../config/productDB')
const {User} = require("../config/adminDB");


class ProductModel {

    static attachProduct = async (user) => {
        try {

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

            let referrer = await User.findOne({ username: user.referralsUsername });

            if (!referrer) {
                referrer = await User.findOne({ _id: user.createdBy });
            }

            if (referrer) {
                const bonus = purchase.totalPrice * 0.05;

                await User.updateOne(
                    { _id: referrer._id },
                    {
                        $inc: { income: bonus },
                        $set: {
                            'goals.income': referrer.goals ? referrer.goals.income - purchase.totalPrice : 0,
                            'goals.users': referrer.goals ? referrer.goals.users - 1 : 0
                        }
                    }
                );

                await User.updateOne({ role: 'admin' }, { $inc: { income: purchase.totalPrice - bonus } });

                console.log(`Referrer ${referrer.username} received a bonus of ${bonus}`);

            } else {
                console.log('Referrer not found or not specified');
            }

            console.log('Purchase details:', purchase);
            return purchase;
        } catch (error) {
            console.error('Error attaching product:', error);
            throw error;
        }
    };

}

module.exports = ProductModel;