// create user model
import mongoose from 'mongoose';

// This model structures the user data

const LiveInPartnetshipSchema = new mongoose.Schema({
  male_firstname: { type: String, required: true, },
  male_middlename: { type: String, required: true, },
  male_lastname: { type: String, required: true, },
  female_firstname: { type: String, required: true, },
  female_middlename: { type: String, required: true, },
  female_lastname: { type: String, required: true, },
  couple_address: { type: String, required: true, },
  years_of_cohibitation: { type: String, required: true, },
  contact: { type: String, required: true, },
  status: { type: mongoose.Schema.Types.ObjectId, ref: 'Status', required: true },
  valid_ids: {
        type: [String],
        default: [],
        validate: [(val) => val.length <= 3, "Valid IDs cannot exceed 3"],
    },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('Partnership', LiveInPartnetshipSchema);
