import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateAIResponse = async (history, newMessage) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Format history for Gemini [{ role: "user", parts: [{ text: "..." }] }]
  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  contents.push({ role: 'user', parts: [{ text: newMessage }] });

  const result = await model.generateContent({ contents });
  const response = await result.response;
  return response.text();
};