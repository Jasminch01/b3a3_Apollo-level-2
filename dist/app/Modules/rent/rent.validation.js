"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRentalSchema = void 0;
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
const objectIdSchema = zod_1.z.string().refine((id) => mongoose_1.Types.ObjectId.isValid(id), {
    message: "Invalid ObjectId",
});
exports.createRentalSchema = zod_1.z.object({
    bikeId: objectIdSchema,
    startTime: zod_1.z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid start time",
    }),
    returnTime: zod_1.z.union([zod_1.z.date(), zod_1.z.null()]).optional().default(null),
    totalCost: zod_1.z.number().optional().default(0),
    isReturned: zod_1.z.boolean().optional().default(false),
});
