const express = require('express');
const RouterC = express.Router();
const ControllerClient = require('../controllers/controllerClient')


RouterC.get('/client', ControllerClient.getAll); 
RouterC.post('/user', ControllerClient.login);
RouterC.post('/register', ControllerClient.register);



module.exports = RouterC;