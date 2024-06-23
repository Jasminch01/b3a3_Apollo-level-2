"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentService = void 0;
const user_model_1 = require("../user/user.model");
const rent_model_1 = require("./rent.model");
const AppError_1 = __importDefault(require("../../Errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const bike_modal_1 = __importDefault(require("../bike/bike.modal"));
const createRentalDB = (userEmail, rentalData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: userEmail });
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const payload = Object.assign({ userId: user._id }, rentalData);
    // Check if the bike is available
    const bike = yield bike_modal_1.default.findOne({ _id: rentalData.bikeId }, { isAvailable: 1 });
    if (!bike) {
        throw new Error("Bike not found");
    }
    if (!bike.isAvailable) {
        throw new Error("Bike is not available");
    }
    // Update bike availability status to false
    bike.isAvailable = false;
    yield bike.save();
    // Create the rental
    const result = yield rent_model_1.Rental.create(payload);
    return result;
});
const returnBikeDB = (rentalId) => __awaiter(void 0, void 0, void 0, function* () {
    const rental = yield rent_model_1.Rental.findById(rentalId);
    if (!rental) {
        throw new Error("Rental not found");
    }
    if (rental.isReturned) {
        throw new Error("Bike has already been returned");
    }
    const bike = yield bike_modal_1.default.findById(rental.bikeId);
    if (!bike) {
        throw new Error("Bike not found");
    }
    // Calculate the total cost based on the rental duration
    const returnTime = new Date();
    const rentalDurationHours = Math.ceil((returnTime.getTime() - rental.startTime.getTime()) / (1000 * 60 * 60));
    const totalCost = rentalDurationHours * bike.pricePerHour;
    // Update the rental details
    rental.returnTime = returnTime;
    rental.totalCost = totalCost;
    rental.isReturned = true;
    yield rental.save();
    // Update bike availability status to true
    bike.isAvailable = true;
    yield bike.save();
    return rental;
});
const getAllRentalDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: email });
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "user not found");
    }
    const userId = user === null || user === void 0 ? void 0 : user._id;
    const result = yield rent_model_1.Rental.find({ userId: userId });
    return result;
});
exports.rentService = {
    createRentalDB,
    returnBikeDB,
    getAllRentalDB,
};
