const express = require('express');
const { login } = require('../controllers/User.controller');
const { loginValidation } = require('../middlewares/Auth.middlewares');
const router = express.Router();

router.post('/login', loginValidation, login );

module.exports = router;