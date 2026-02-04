import express from 'express';
import { handleChat } from '../controllers/chat.controller.js';
import { apiKeyAuth } from '../middlewares/auth.middleware.js';
const router = express.Router();

// Apply API Key protection to all chat routes
router.use(apiKeyAuth);


router.get('/metrics/summary', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: { activeSessions: [] }
    });
});

router.post('/', handleChat);

export default router;