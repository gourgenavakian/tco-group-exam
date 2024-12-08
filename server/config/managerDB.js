const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username:{ type: String, required: true },
    fullName: { type: String, required: true },
    gender:{ type: String, required: true },
    password:{ type: String, required: true },
    city:{ type: String, required: false },
    country:{ type: String, required: false },
    avatar:{ type: String, required: false },
    options:{ type: String, required: true },
    users: {type: Array, required: false },
});

const Manager = mongoose.model('Manager', managerSchema);

module.exports = {Manager};