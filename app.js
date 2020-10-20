const express = require('express')
const app = express()
require('./modules/mongodb')
const router = require('./router/router')
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", router())

app.use((req, res) => {
  res.send(`
    Error 404 - Sorry the requested page is not available
  `)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = app