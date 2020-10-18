const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const { projectsSchema } = require('../models/projects-schema')
const dbName = 'projects'

MongoClient.connect(process.env.MONGO_LOCAL, async (err, client) => {
  if (!err) {

    const db = client.db(dbName)
    const mongoDBCollectionArray =
      await db.listCollections().toArray()
    
    if (mongoDBCollectionArray.length === 0) {

      try {
        
        await db.createCollection('projects', {
          validator: {
            $jsonSchema: {projectsSchema}
          }
        })
      } catch (error) {
        console.log(error);
      }
    }

  }
  

  console.log(err);
})
