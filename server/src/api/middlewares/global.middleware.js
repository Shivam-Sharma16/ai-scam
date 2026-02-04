import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
import { config } from '../../config/index.js';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: { status: 'error', message: 'Too many requests, please try again later.' }
});

export const applyGlobalMiddlewares = (app) => {
  app.use(helmet()); // Security headers
  app.use(cors({ origin: config.corsOrigin })); // CORS management
  app.use(morgan(config.env === 'development' ? 'dev' : 'combined')); // Logging
  app.use(express.json({ limit: '10kb' })); // Body parser with payload limit
  app.use(limiter); // DDoS/Brute-force protection
};