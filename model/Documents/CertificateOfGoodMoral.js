// create user model
import mongoose from 'mongoose';

// This model structures the user data

const MoralSchema = new mongoose.Schema({
  firstname: { type: String, required: true, },
  middlename: { type: String, required: true, },
  lastname: { type: String, required: true, },
  address: { type: String, required: true, },
  occupation: { type: String, required: true, },
  purpose: { type: String, required: true, },
  contact: { type: String, required: true, },
  status: { type: mongoose.Schema.Types.ObjectId, ref: 'Status', required: true },
  valid_ids: {
        type: [String],
        default: [],
        validate: [(val) => val.length <= 3, "Valid IDs cannot exceed 3"],
    },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('Moral', MoralSchema);
