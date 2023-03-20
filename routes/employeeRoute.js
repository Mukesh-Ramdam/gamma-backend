const express = require('express')
const router= express.Router()



const {createEmployee, getAllEmployees, updateEmployee, deleteEmployee, searchEmployee }= require('../controllers/employeeController')

 
router
 .route('/')
 .post(createEmployee)
 .get(getAllEmployees)
 

router
 .route('/:id')
 .put(updateEmployee)
 .delete(deleteEmployee)

 router
  .route('/search')
  .post(searchEmployee)
  
 
module.exports = router