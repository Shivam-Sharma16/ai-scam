import dotenv from 'dotenv';

// Load .env file
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  mongodbUri: process.env.MONGODB_URI,
  geminiApiKey: process.env.GEMINI_API_KEY,
  internalApiKey: process.env.API_KEY,
  env: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '*'
};

// Simple validation to ensure critical keys are present
if (!config.mongodbUri || !config.geminiApiKey) {
  throw new Error("❌ CRITICAL ERROR: Missing essential environment variables.");
}