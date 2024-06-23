"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bikeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    pricePerHour: {
        type: Number,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    cc: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    model: {
        type: String,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
// Create and export the model
const Bike = (0, mongoose_1.model)("Bike", bikeSchema);
exports.default = Bike;
