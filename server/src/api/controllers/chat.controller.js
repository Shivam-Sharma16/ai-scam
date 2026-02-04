import { processChatMessage } from '../../services/chat.service.js';

export const handleChat = async (req, res, next) => {
  try {
    const { conversationId, message } = req.body;

    if (!conversationId || !message) {
      return res.status(400).json({ error: 'Missing conversationId or message' });
    }

    const result = await processChatMessage(conversationId, message);
    
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (error) {
    next(error);
  }
};