const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./modules/mongodb')
const router = require('./router/router')

app.use("/", router())

app.listen(port, () => {
  console.log(`server listen in port ${port}`);
})
