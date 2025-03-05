// create user model
import mongoose from 'mongoose';

// This model structures the user data

const StatusSchema = new mongoose.Schema({
    status: { type: String, enum: ['pending', 'approved', 'ready for pickup'], default: 'pending', },
    set_an_appointment: { type : String, required: true, },
  
});

export default mongoose.model('Complaint-status', StatusSchema);
