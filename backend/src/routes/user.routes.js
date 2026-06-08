const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validate.middleware');
const { createUserValidator, updateUserValidator } = require('../validators/user.validator');
const { protect, authorize } = require('../middlewares/auth.middleware');

// Protect all user routes
router.use(protect);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', authorize('ADMIN'), validate(createUserValidator), userController.createUser);
router.put('/:id', validate(updateUserValidator), userController.updateUser);
router.delete('/:id', authorize('ADMIN'), userController.deleteUser);

module.exports = router;
