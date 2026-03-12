import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long"),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters"),

  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
});