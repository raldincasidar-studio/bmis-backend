// create user model
import mongoose from 'mongoose';

// This model structures the user data

const ChairsSchema = new mongoose.Schema({
  date: { type: String, required: true, },
  time: { type: String, required: true, },
  purpose_of_borrowing: { type: String, required: true, },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('Chairs', ChairsSchema);
