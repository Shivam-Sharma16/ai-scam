import Conversation from '../models/conversation.model.js';
import { generateAIResponse } from '../agents/engines/gemini.engine.js';

export const processChatMessage = async (conversationId, message) => {
  // 1. Fetch or Create Conversation
  let convo = await Conversation.findOne({ conversationId });
  if (!convo) {
    convo = new Conversation({ conversationId, history: [] });
  }

  // 2. Get AI Response
  const aiResponse = await generateAIResponse(convo.history, message);

  // 3. Update History
  convo.history.push({ role: 'user', content: message });
  convo.history.push({ role: 'model', content: aiResponse });

  // 4. (Simulated) Intelligence Extraction
  convo.intelligence.scamProbability = Math.random(); // Replace with real analysis logic
  
  await convo.save();

  return {
    response: aiResponse,
    analysis: convo.intelligence
  };
};