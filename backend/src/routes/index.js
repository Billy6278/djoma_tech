const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const contactRoutes = require('./contact.routes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/contact', contactRoutes);

module.exports = router;
