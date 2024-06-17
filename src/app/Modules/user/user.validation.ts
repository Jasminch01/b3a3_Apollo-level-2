import { z } from "zod";

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    phone: z.string().regex(/^\d{10}$/),
    address: z.string(),
    role: z.enum(["admin", "user"]).default('user'),
  }),
});
export const loginUserValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

