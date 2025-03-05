// create user model
import mongoose from 'mongoose';

// This model structures the user data

const StatusSchema = new mongoose.Schema({
    status: { type: String, enum: ['pending', 'approved', 'ready for pickup'], default: 'pending', },
    recieved_as: { type: String, enum: ['pdf', 'in_person'], default: 'pdf', },
    set_an_appointment: { type : String, default: '',},
  
});

export default mongoose.model('Status', StatusSchema);
