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
exports.bikeController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const bike_service_1 = require("./bike.service");
const createBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = req.body;
    const result = yield bike_service_1.bikeServices.createBikeDB(bike);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Bike added successfully",
        data: result,
    });
}));
const getAllBikes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.bikeServices.getAllBikesDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Bikes are retrived successfully",
        data: result,
    });
}));
const updateBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikesId = req.params.id;
    const bikeUpdates = req.body;
    const result = yield bike_service_1.bikeServices.updateBikeDB(bikesId, bikeUpdates);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Bikes updated successfully",
        data: result,
    });
}));
const deleteBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikesId = req.params.id;
    const result = yield bike_service_1.bikeServices.deleteBikeDB(bikesId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Bikes deleted successfully",
        data: result,
    });
}));
exports.bikeController = {
    createBike,
    getAllBikes,
    updateBike,
    deleteBike,
};
