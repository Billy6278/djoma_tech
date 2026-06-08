const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const validate = require('../middlewares/validate.middleware');
const { contactValidator } = require('../validators/contact.validator');

router.post('/', validate(contactValidator), contactController.sendContactMessage);

module.exports = router;
