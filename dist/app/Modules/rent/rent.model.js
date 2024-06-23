"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rental = void 0;
const mongoose_1 = require("mongoose");
const rentalSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
    },
    bikeId: {
        type: mongoose_1.Types.ObjectId,
        ref: "Bike",
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    returnTime: { type: Date, default: null },
    totalCost: { type: Number, default: 0 },
    isReturned: { type: Boolean, default: false },
});
exports.Rental = (0, mongoose_1.model)("Rental", rentalSchema);
