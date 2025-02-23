// create user model
import mongoose from 'mongoose';

// This model structures the user data

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  email: { type: String, required: true, unique: true, },
  password: { type: String, required: true, }, 
  role: { type: String, enum: ['admin', 'user'], default: 'user', },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('User', userSchema);
