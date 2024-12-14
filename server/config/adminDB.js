const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    fullName: {type: String, required: true},
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    password: {
        type: String,
        required: function () {
            return this.role !== 'user';
        }
    },
    passportID: {
        type: String,
        required: function () {
            return this.role !== 'admin';
        }
    },
    city: {type: String},
    country: {type: String},
    card: {
        type: {type: String},
        creditCardNumber: {type: String},
        expirationDate: {
            month: {type: String},
            year: {type: String},
        },
        cvc: {type: String}
    },
    avatar: {type: String},
    role: {
        type: String,
        enum: ['admin', 'manager', 'user'],
        default: 'user'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: function () {
            return this.role !== 'admin';
        }
    },
    goals: {
        type: {
            users: { type: Number, default: 0 },
            income: { type: Number, default: 0 }
        },
        default: undefined,
        required: function () {
            return this.role === 'manager';
        }
    },
    managedUsers: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }],
        default: undefined,
        required: function () {
            return this.role === 'manager';
        }
    },
    income: {
        type: Number,
        default: 0,
        required: function () {
        return this.role !== 'user';
        }},
    salary: {
        type: Number,
        required: function () {
        return this.role === 'manager';},
        default: undefined},
    createdAt: {type: Date, default: Date.now},
    purchases: {
        type: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'InternetPackage',
                    required: true
                },
                status: {type: String, enum: ['primary', 'secondary', 'third', 'inactive']},
                price: { type: Number, default: 0 },
                purchaseDate: { type: Date, default: Date.now },
                quantity: { type: Number, default: 1 },
                totalPrice: { type: Number, default: 0 },
            }
        ],
        default: undefined
    },
    isActive: {type: Boolean, default: true},
});


const User = mongoose.model('User', userSchema);

module.exports = {User};