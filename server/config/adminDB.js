const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username:{ type: String, required: true },
    fullName: { type: String, required: true },
    gender:{ type: String, required: true },
    password:{ type: String, required: true },
    city:{ type: String, required: false },
    country:{ type: String, required: false },
    card:{ type: Object, required: true },
    avatar:{ type: String, required: false },
    options:{ type: String, required: true },
    users: {type: Array, required: false },
    Sales: {type: Array, required: false },
});

const Admin = mongoose.model('Admin', userSchema);

module.exports = {Admin};