const express = require('express');
const router = express.Router()
const handler = require('../controller/handlers')

module.exports = () => {

  router.get('/', handler.home)

  return router
}