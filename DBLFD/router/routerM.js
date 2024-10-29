const express = require('express');
const RouterM = express.Router();
const ControllerMarchand = require('../controllers/controllerMarcha')


RouterM.get('/march', ControllerMarchand.getAll); 
RouterM.post('/add', ControllerMarchand.register);



module.exports = RouterM;