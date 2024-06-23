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
exports.rentController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const rent_service_1 = require("./rent.service");
const createReantal = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const email = user.userEmail;
    const payload = req.body;
    const result = yield rent_service_1.rentService.createRentalDB(email, payload);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Rental created successfully",
        data: result,
    });
}));
const returnBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalId = req.params.id;
    const result = yield rent_service_1.rentService.returnBikeDB(rentalId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Bike returned successfully",
        data: result,
    });
}));
const getAllRentalDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const email = user.userEmail;
    const result = yield rent_service_1.rentService.getAllRentalDB(email);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Rentals are retrived successfully",
        data: result,
    });
}));
exports.rentController = {
    createReantal,
    returnBike,
    getAllRentalDB,
};
