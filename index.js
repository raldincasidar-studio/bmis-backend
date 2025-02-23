import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './model/User.js';
import RegisterController from './controller/User/register.js';
import AdminController from './controller/admin/AdminController.js';
import './database/mongodb.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());















// These are the routes
// @params /api/ required

app.get('/api/', RegisterController);


// User routes
app.get('/api/user', AdminController);
app.post('/api/user', AdminController);
app.put('/api/user', AdminController);
app.delete('/api/user', AdminController);




// Admin routes
app.get('/api/admin', AdminController);
app.post('/api/admin', AdminController);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);



























// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
