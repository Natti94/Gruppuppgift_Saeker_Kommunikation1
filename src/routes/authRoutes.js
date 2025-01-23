
const express = require('express');
const authController = require('../Controllers/authController'); 
const router = express.Router();

// router.post('/login', login);
router.post('/user, register', authController.register);
router.post('/login', authController.login);
// router.get('/secure', verifyToken, authController.secure);
// router.get('/admin-only', verifyAdmin, authController.adminOnly);

module.exports = router;