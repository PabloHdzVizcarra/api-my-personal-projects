const express = require('express');
const router = express.Router()
const handler = require('../controller/handlers')
const validator = require('../modules/body-validation')

module.exports = () => {

  router.get('/', handler.home)


  router.get('/projects', handler.getAllData)

  router.post('/',
    validator.projectsValidationRules(),
    validator.validate,
    handler.sendData
  )

  router.delete('/project/:id', handler.deleteData)

  return router
}