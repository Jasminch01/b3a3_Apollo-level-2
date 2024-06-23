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
exports.bikeServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Errors/AppError"));
const bike_modal_1 = __importDefault(require("./bike.modal"));
const createBikeDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield bike_modal_1.default.create(payload);
    return newUser;
});
const getAllBikesDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield bike_modal_1.default.find();
    return bikes;
});
const updateBikeDB = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const isBikeExist = yield bike_modal_1.default.findById(id);
    if (!isBikeExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "bike not found");
    }
    const updatedBike = yield bike_modal_1.default.findOneAndUpdate({ _id: id }, update, {
        new: true,
        runValidators: true,
    });
    return updatedBike;
});
const deleteBikeDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isBikeExist = yield bike_modal_1.default.findById(id);
    if (!isBikeExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "bike not found");
    }
    const deletedBike = yield bike_modal_1.default.findOneAndUpdate({ _id: id }, { isAvailable: false }, { new: true, runValidators: true });
    return deletedBike;
});
exports.bikeServices = {
    createBikeDB,
    getAllBikesDB,
    updateBikeDB,
    deleteBikeDB,
};
