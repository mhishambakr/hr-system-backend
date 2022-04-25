const express = require('express');
const { createEmployee, findAllEmployees, updateEmployee } = require('../controllers/Employee.controller');
const { userAuthentication } = require('../middlewares/Auth.middlewares');
const { createEmployeeValidation, updateEmployeeValidation } = require('../middlewares/Employee.middlewares');
const router = express.Router();

router.get('/findAll', userAuthentication, findAllEmployees);
router.post('/create', createEmployeeValidation, createEmployee);
router.patch('/update', updateEmployeeValidation, updateEmployee);


module.exports = router;