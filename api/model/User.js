// create user model
import mongoose from 'mongoose';

// This model structures the user data

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, },
  middlename: { type: String, required: true, },
  lastname: { type: String, required: true, },
  gender: { type: String, required: true, },
  date_of_birth: { type: String, required: true, },
  civil_status: { type: String, required: true, },
  subdivision: { type: String, required: true, },
  block: { type: String, required: true, },
  lot: { type: String, required: true, },
  year_lived: { type: String, required: true, },
  occupation: { type: String, required: true, },
  voters: { type: String, required: true, },
  contact: { type: String, required: true, },
  email: { type: String, required: true, unique: true, },
  password: { type: String, required: true, },
  profile: { type: String, required: true, },
  proof_of_residency: {
    type: [String],
    required: true,
    validate: [(val) => val.length <= 3, "Valid IDs cannot exceed 3"],
  },
  role: { type: String, enum: ['admin', 'user'], default: 'user', },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('User', userSchema);
