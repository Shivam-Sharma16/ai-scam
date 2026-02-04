import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  role: { type: String, enum: ['user', 'model'], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const conversationSchema = new mongoose.Schema({
  conversationId: { type: String, required: true, unique: true },
  history: [messageSchema],
  intelligence: {
    scamProbability: { type: Number, default: 0 },
    detectedTactics: [String],
    threatLevel: { type: String, default: 'Low' }
  }
}, { timestamps: true });

export default mongoose.model('Conversation', conversationSchema);