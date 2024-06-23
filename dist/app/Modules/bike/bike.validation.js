"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeZodSchema = void 0;
const zod_1 = require("zod");
exports.bikeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty({ message: "Name is required" }).trim(),
        description: zod_1.z
            .string()
            .nonempty({ message: "Description is required" })
            .trim(),
        pricePerHour: zod_1.z
            .number()
            .positive({ message: "Price per hour must be a positive number" }),
        isAvailable: zod_1.z.boolean().default(true),
        cc: zod_1.z.number().positive({ message: "CC must be a positive number" }),
        year: zod_1.z.number().min(1900, { message: "Year must be a valid year" }),
        model: zod_1.z.string().nonempty({ message: "Model is required" }).trim(),
        brand: zod_1.z.string().nonempty({ message: "Brand is required" }).trim(),
    }),
});
