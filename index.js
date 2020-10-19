const config = require('./config')
const app = require('./app')

app.listen(config.PORT, config.HOST,  () => {
  console.log(`server is on http://${config.HOST}:${config.PORT} mode ${config.NODE_ENV}`)
})

