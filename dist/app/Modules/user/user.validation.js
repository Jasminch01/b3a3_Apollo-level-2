"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserValidationSchema = exports.userValidationSchema = void 0;
const zod_1 = require("zod");
exports.userValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(8),
        phone: zod_1.z.string().regex(/^\d{10}$/),
        address: zod_1.z.string(),
        role: zod_1.z.enum(["admin", "user"]).default('user'),
    }),
});
exports.loginUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(8),
    }),
});
