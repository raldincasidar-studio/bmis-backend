// create user model
import mongoose from 'mongoose';

// This model structures the user data

const ComplaintSchema = new mongoose.Schema({
  address: { type: String, required: true, },
  date: { type: String, required: true, },
  incident_details: { type: String, required: true, },
  photo_evidence: {
        type: [String],
        default: [],
        validate: [(val) => val.length <= 3, "Valid IDs cannot exceed 3"],
    },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('Complaint', ComplaintSchema);
