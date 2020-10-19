const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/my-projects'


mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))




module.exports = {
  db
}