const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: false,
    },
    state:{
        type: String,
        required: false,
    },
    card:{
        type: Object,
        required: true,
    },
    avatar:{
        type: String,
        required: false,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {User};