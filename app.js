const express = require('express')
const app = express()
require('./modules/mongodb')
const router = require('./router/router')
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", router())

module.exports = app