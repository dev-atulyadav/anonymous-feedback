import { z } from "zod";

export const messageSchema = z.object({
  contnt: z
    .string()
    .min(10, { message: "Content must be atleast 10 characters" })
    .max(300, { message: "Content must be not more than 300 characters" }),
});
