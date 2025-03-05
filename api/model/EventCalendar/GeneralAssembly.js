// create user model
import mongoose from 'mongoose';

// This model structures the user data

const AssemblySchema = new mongoose.Schema({
  firstname: { type: String, required: true, },
  lastname: { type: String, required: true, },
  date_of_birth: { type: String, required: true, },
  contact: { type: String, required: true, },
  valid_documents: {
        type: [String],
        default: [],
        validate: [(val) => val.length <= 3, "Valid IDs cannot exceed 3"],
    },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('Assembly', AssemblySchema);
