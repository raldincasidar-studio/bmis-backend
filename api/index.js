import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import RegisterController from './controller/User/UserRegister.js';
import AdminController from './controller/Admin/AdminController.js';
import './database/mongodb.js';
import UserLogin from './controller/User/UserLogin.js';
import UserRegister from './controller/User/UserRegister.js';
import BusinessPermitRegister from './controller/User/Documents/BusinessPermitRegister.js';
import CedulaRegister from './controller/User/Documents/ResidencyRegister.js';
import BarangayClearanceRegister from './controller/User/Documents/BarangayClearanceRegister.js';
import ComplaintRegister from './controller/User/Complaint/ComplaintRegister.js';
import ComplaintStatus from './controller/User/Complaint/ComplaintStatus.js';
import BasketballLeagueRegister from './controller/User/EventCalendar/BasketballLeagueRegister.js';
import BeautyPageantRegister from './controller/User/EventCalendar/BeautyPageantRegister.js';
import GeneralAssemblyRegister from './controller/User/EventCalendar/GeneralAssemblyRegister.js';
import ChairsRegister from './controller/User/BorowAssets/ChairsRegister.js';
import TablesRegister from './controller/User/BorowAssets/TablesRegister.js';
import VehiclesRegister from './controller/User/BorowAssets/VehiclesRegister.js';
import FeedbackRegister from './controller/User/FeedbackRegister.js';
import ResidencyRegister from './controller/User/Documents/ResidencyRegister.js';
import IndigencyRegister from './controller/User/Documents/IndigencyRegister.js';
import GoodMoralRegister from './controller/User/Documents/GoodMoralRegister.js';
import SoloParentRegister from './controller/User/Documents/SoloParentRegister.js';
import LiveInPartnershipRegister from './controller/User/Documents/LiveInPartnershipRegister.js';
import HouseholdRegister from './controller/User/HouseholdRegister.js';
import GetAllUsers from './controller/User/GetAllUsers.js';
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
app.get('/api/user', GetAllUsers);
app.post('/api/login', UserLogin);
app.post('/api/register', UserRegister);
app.put('/api/user', AdminController);
app.delete('/api/user', AdminController);

// Admin routes
app.get('/api/admin', AdminController);
app.post('/api/admin', AdminController);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);


//Request Documents

// Permit routes
app.get('/api/admin', AdminController);
app.post('/api/business', BusinessPermitRegister);
app.post('/api/cedula', CedulaRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);

// Clearance routes
app.get('/api/admin', AdminController);
app.post('/api/clearance', BarangayClearanceRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);

// Residency routes
app.get('/api/admin', AdminController);
app.post('/api/residency', ResidencyRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);

// Indigency routes
app.get('/api/admin', AdminController);
app.post('/api/indigency', IndigencyRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);

// Good Moral Character routes
app.get('/api/admin', AdminController);
app.post('/api/good-moral', GoodMoralRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);

// Solo Parent routes
app.get('/api/admin', AdminController);
app.post('/api/solo-parent', SoloParentRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);

// Live-In Partnership routes
app.get('/api/admin', AdminController);
app.post('/api/livein-partnership', LiveInPartnershipRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);


//File a complaint

// Complaint routes
app.get('/api/admin', AdminController);
app.post('/api/complaint', ComplaintRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);

// ComplaintStatus routes
app.get('/api/admin', AdminController);
app.post('/api/complaint-status', ComplaintStatus);


// Event Calendars

//Basketball routes
app.get('/api/admin', AdminController);
app.post('/api/basketball', BasketballLeagueRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);
//Pageant routes
app.get('/api/admin', AdminController);
app.post('/api/pageant', BeautyPageantRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);
//Assembly routes
app.get('/api/admin', AdminController);
app.post('/api/assembly', GeneralAssemblyRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);


// Borrow an Asset

//Chairs routes
app.get('/api/admin', AdminController);
app.post('/api/chairs', ChairsRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);
//Tables routes
app.get('/api/admin', AdminController);
app.post('/api/tables', TablesRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);
//Vehicles routes
app.get('/api/admin', AdminController);
app.post('/api/vehicles', VehiclesRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);


// Household
//Vehicles routes
app.get('/api/admin', AdminController);
app.post('/api/household', HouseholdRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);



// Notification routes

// Feedback routes
app.get('/api/admin', AdminController);
app.post('/api/feedback', FeedbackRegister);
app.put('/api/admin', AdminController);
app.delete('/api/admin', AdminController);
















export default app;




// Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
