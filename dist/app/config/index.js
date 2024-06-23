"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT,
    dbUri: process.env.DB_URI,
    bcrypt_salt_rounds: process.env.bcrypt_salt_rounds,
    jwt_access_expires_in: process.env.jwt_access_expires_in,
    jwt_access_secret: process.env.jwt_access_secret,
};
