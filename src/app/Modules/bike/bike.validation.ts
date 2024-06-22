import { z } from "zod";

export const bikeZodSchema = z.object({
  body: z.object({
    name: z.string().nonempty({ message: "Name is required" }).trim(),
    description: z
      .string()
      .nonempty({ message: "Description is required" })
      .trim(),
    pricePerHour: z
      .number()
      .positive({ message: "Price per hour must be a positive number" }),
    cc: z.number().positive({ message: "CC must be a positive number" }),
    year: z.number().min(1900, { message: "Year must be a valid year" }),
    model: z.string().nonempty({ message: "Model is required" }).trim(),
    brand: z.string().nonempty({ message: "Brand is required" }).trim(),
  }),
});
