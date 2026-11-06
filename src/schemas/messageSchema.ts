import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Content must be at least of 3 characters")
    .max(10, "Content must be no longer then 3 characters"),
});
