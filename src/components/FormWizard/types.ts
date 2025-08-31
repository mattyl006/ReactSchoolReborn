import { z } from "zod";

export const historyItemSchema = z.object({
  field: z
    .string()
    .min(1, "Field must be at least 1 character")
    .max(20, "Field should be max 20 characters"),
  timestamp: z.date(),
});

export type InputHistoryItem = z.infer<typeof historyItemSchema>;
