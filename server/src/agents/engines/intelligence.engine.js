import { generateAIResponse } from './gemini.engine.js';

export const extractScamIntelligence = async (message) => {
  const prompt = `
    Analyze the following message for scam indicators. 
    Return a JSON object with:
    1. threatLevel (Low, Medium, High, Critical)
    2. detectedTactics (Array of strings)
    3. scamProbability (0.0 to 1.0)
    
    Message: "${message}"
  `;

  try {
    const rawAnalysis = await generateAIResponse([], prompt);
    // In a real scenario, use a specific JSON-output mode or regex to parse
    return JSON.parse(rawAnalysis); 
  } catch (error) {
    return { threatLevel: 'Low', detectedTactics: [], scamProbability: 0 };
  }
};