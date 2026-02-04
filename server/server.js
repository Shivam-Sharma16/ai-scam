import express from 'express';
import mongoose from 'mongoose';
import { config } from './src/config/index.js';
import { applyGlobalMiddlewares } from './src/api/middlewares/global.middleware.js';

const startServer = async () => {
  const app = express();

  // Example route in chat.routes.js or a new metrics.routes.js
router.get('/metrics/summary', apiKeyAuth, (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { activeSessions: [] } // Ensure this structure matches your JSX
  });
});
  // 1. Apply Security & Global Middlewares
  applyGlobalMiddlewares(app);

  // 2. Database Connection
  try {
    await mongoose.connect(config.mongodbUri);
    console.log('✅ Database connection established');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }

  // 3. Basic Health Check
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'active', environment: config.env });
  });

  // 4. Start Listening
  app.listen(config.port, () => {
    console.log(`🚀 Sentience Server running in ${config.env} mode on port ${config.port}`);
  });
};

startServer();