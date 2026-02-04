import express from 'express';
import mongoose from 'mongoose';
import { config } from './src/config/index.js';
import { applyGlobalMiddlewares } from './src/api/middlewares/global.middleware.js';
import chatRoutes from './src/api/routes/chat.routes.js';

const startServer = async () => {
  const app = express();

  // 1. Apply Security & Global Middlewares
  applyGlobalMiddlewares(app);

  // Mount Routes
  app.use('/api/chat', chatRoutes);

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