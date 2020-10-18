const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

MongoClient.connect(process.env.MONGO_LOCAL, function(err, db) {
  if (!err) {
    console.log('connect to database');
  }

  console.log(err);
})
