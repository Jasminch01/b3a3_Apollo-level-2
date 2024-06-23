"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRouter = void 0;
const express_1 = require("express");
const bike_controller_1 = require("./bike.controller");
const validateRequestedData_1 = __importDefault(require("../../utils/validateRequestedData"));
const bike_validation_1 = require("./bike.validation");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
router.post("/bikes", (0, auth_1.auth)("admin"), (0, validateRequestedData_1.default)(bike_validation_1.bikeZodSchema), bike_controller_1.bikeController.createBike);
router.get("/bikes", bike_controller_1.bikeController.getAllBikes);
router.put("/bikes/:id", (0, auth_1.auth)("admin"), bike_controller_1.bikeController.updateBike);
router.delete("/bikes/:id", (0, auth_1.auth)("admin"), bike_controller_1.bikeController.deleteBike);
exports.bikeRouter = router;
