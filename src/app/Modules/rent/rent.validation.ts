import { z } from "zod";
import { Types } from "mongoose";

const objectIdSchema = z.string().refine((id) => Types.ObjectId.isValid(id), {
  message: "Invalid ObjectId",
});

export const createRentalSchema = z.object({
  bikeId: objectIdSchema,
  startTime: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid start time",
  }),
  returnTime: z.union([z.date(), z.null()]).optional().default(null),
  totalCost: z.number().optional().default(0),
  isReturned: z.boolean().optional().default(false),
});
