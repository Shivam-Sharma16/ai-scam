import { z } from 'zod';

export const validateChatRequest = (data) => {
  const schema = z.object({
    conversationId: z.string().uuid({ message: "Invalid conversation ID format" }),
    message: z.string().min(1, "Message cannot be empty").max(2000),
    metadata: z.object({
      source: z.string().optional()
    }).optional()
  });

  return schema.safeParse(data);
};