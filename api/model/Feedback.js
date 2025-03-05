// create user model
import mongoose from 'mongoose';

// This model structures the user data

const FeedbackSchema = new mongoose.Schema({
  feedback: { type: String, required: true, },
  rate: { type: Number, enum: [1, 2, 3, 4, 5], default: 5 , },
  assessment: { type: String, required: true, },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('Feedback', FeedbackSchema);
