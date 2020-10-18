const express = require('express');
const router = express.Router()
const handler = require('../controller/handlers')

module.exports = () => {

  router.get('/', handler.home)
  router.post('/', handler.sendData)

  return router
}