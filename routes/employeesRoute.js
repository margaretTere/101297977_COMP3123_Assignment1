const express = require('express');
const empController = require('../controllers/employeeController');

const router = express.Router();
// Employee conrtoller implements all functionality used by employee router
router
    .route('/')
    .get(empController.getAllEmployees)
    .post(empController.createNewEmployee)
    .delete(empController.deleteEmployee);



router
    .route('/:eid')
    .get(empController.getEmployee)
    .put(empController.updateEmployee);
           
module.exports = router;

