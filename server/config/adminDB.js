const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    fullName: { type: String, required: true },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    password: {
        type: String,
        required: function() { return this.role !== 'user'; } },
    passportID: {
        type: String,
        required: function() { return this.role !== 'admin'; } },
    city: { type: String },
    country: { type: String },
    card: {
        type: { type: String },
        creditCardNumber: { type: String },
        expirationDate: {
            month: { type: String },
            year: { type: String },
        },
        cvv: { type: String }
    },
    avatar: { type: String },
    role: {
        type: String,
        enum: ['admin', 'manager', 'user'],
        default: 'user'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: function() { return this.role !== 'admin'; }
    },
    managedUsers: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }],
        default: undefined,
        required: function () { return this.role === 'manager'; }
    },
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
});



const User = mongoose.model('User', userSchema);

module.exports = {User};