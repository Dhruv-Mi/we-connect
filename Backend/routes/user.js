const express = require('express');
const user = require('../controllers/user');
const userRoutes = express.Router();
const userCtrl = require('../controllers/user');
const {LOGIN, PROFILE, DELETE,UPDATE} = require('../utils/constants/app_constants').ROUTES.USER;
const {FIND} =require('../utils/constants/app_constants').ROUTES.ROOM;
userRoutes.post(LOGIN, userCtrl.login);
userRoutes.post('/register', userCtrl.register);
userRoutes.get(PROFILE, userCtrl.profile);
userRoutes.post(DELETE, userCtrl.deleteProfile);
userRoutes.post(UPDATE, userCtrl.updatepassword);
userRoutes.post(FIND,userCtrl.findroom);
userRoutes.post('/addroom',userCtrl.addroom);
module.exports = userRoutes;
