const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const jwtAuth = require('../middleware/jwtAuth');

// Middleware to verify JWT token
router.use(jwtAuth);

router.post('/profile', userController.createOrUpdateProfile);

module.exports = router;
