// create user model
import mongoose from 'mongoose';

// This model structures the user data

const NotificationSchema = new mongoose.Schema({
  admin_name: { type: String, required: true, },
  date: { type: String, required: true, },
  remarks: { type: String, required: true, },
  createdAt: { type: Date, default: Date.now, },
});

export default mongoose.model('Notification', NotificationSchema);
