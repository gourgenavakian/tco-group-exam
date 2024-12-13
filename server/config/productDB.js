const mongoose = require('mongoose');

const internetPackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    speed: {
        type: String,
        required: true,
        trim: true,
    },
    dataLimit: {
        type: String,
        required: true,
        trim: true,
    },
    status: {type: String, enum: ['primary', 'secondary', 'third', 'inactive']},
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        trim: true,
    },
    duration: {
        type: Number,
        required: true,
        min: 1,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});


internetPackageSchema.pre('save', function (next) {
    if (this.isModified()) {
        this.updatedAt = Date.now();
    }
    next();
});

const InternetPackage = mongoose.model('InternetPackage', internetPackageSchema);

module.exports = InternetPackage;
