const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./modules/mongodb')
const router = require('./router/router')
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/", router())

app.listen(port, () => {
  console.log(`server listen in port ${port}`);
})
