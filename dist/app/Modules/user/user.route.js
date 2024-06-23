"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequestedData_1 = __importDefault(require("../../utils/validateRequestedData"));
const user_validation_1 = require("./user.validation");
const auth_1 = require("../../middleware/auth");
const router = (0, express_1.Router)();
router.post("/signup", (0, validateRequestedData_1.default)(user_validation_1.userValidationSchema), user_controller_1.userController.createUser);
router.post("/login", (0, validateRequestedData_1.default)(user_validation_1.loginUserValidationSchema), user_controller_1.userController.LoginUser);
router.get("/me", (0, auth_1.currentUser)(), user_controller_1.userController.GetUserProfile);
router.put('/me', (0, auth_1.currentUser)(), user_controller_1.userController.updateUser);
exports.userRouter = router;
