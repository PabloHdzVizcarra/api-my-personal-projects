const mongoose = require('mongoose')
const url = process.env.DATABASE

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))

module.exports = {
  db
}