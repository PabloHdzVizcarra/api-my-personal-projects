const express = require('express');
const router = express.Router()
const handler = require('../controller/handlers')
const validator = require('../modules/body-validation')

module.exports = () => {

  router.get('/', handler.home)

  router.post('/',
    validator.projectsValidationRules(),
    validator.validate,
    handler.sendData
  )
  

  return router
}