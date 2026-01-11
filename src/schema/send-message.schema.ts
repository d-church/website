import { z } from "zod";

export const sendMessageSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(5).max(500),
});

export type TSendMessage = z.infer<typeof sendMessageSchema>;
