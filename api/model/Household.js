// create user model
import mongoose from 'mongoose';

// This model structures the user data

const householdSchema = new mongoose.Schema({
  select_role: { type: String, required: true, },
  firstname: { type: String, required: true, },
  middlename: { type: String, required: true, },
  lastname: { type: String, required: true, },
  gender: { type: String, required: true, },
  date_of_birth: { type: String, required: true, },
  civil_status: { type: String, required: true, },
  year_lived: { type: String, required: true, },
  occupation: { type: String, required: true, },
  valid_ids: {
    type: [String],
    required: true,
    validate: [(val) => val.length <= 3, "Valid IDs cannot exceed 3"],
  },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('Household', householdSchema);
