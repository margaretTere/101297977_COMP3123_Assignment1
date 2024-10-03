const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();
// User conrtoller implements all functionality used by user router
router
    .route('/signup')
    .post(userController.signUpUser);

router
    .route('/login')
    .post(userController.loginUser);


module.exports = router;
