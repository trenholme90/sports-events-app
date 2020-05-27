const express = require('express');
const multer = require('multer');

const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController');
const DashboardController = require('./controllers/DashboardController');
const LoginController = require('./controllers/LoginController');
const RegistrationController = require('./controllers/RegistrationController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig); 

routes.get('/status', (req, res) => {
    res.send({status: 200});
});

// Login Route
routes.post('/Login', LoginController.store)

//Registration Routes
routes.post('/registration/:eventId', RegistrationController.create)
routes.get('/registration/:registration_id', RegistrationController.getRegistration)
routes.post('/registration/:registration_id/approval', ApprovalController.approval)
routes.post('/registration/:registration_id/rejection', RejectionController.rejection)

//Dashboard Routes
routes.get('/dashboard/:sport', DashboardController.getAllEvents)
routes.get('/dashboard', DashboardController.getAllEvents)
routes.get('/event/:eventId', DashboardController.getEventById)

//Event Routes
routes.post('/event', upload.single('thumbnail'), EventController.createEvent)
routes.delete('/event/:eventId', EventController.delete)


// User Routes
routes.post('/user/register', UserController.createUser);
routes.get('/user/:userId', UserController.getUserByID)

module.exports = routes;