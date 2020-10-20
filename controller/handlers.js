const { Project } = require("../models/projects-schema")


exports.home = (req, res) => {
  res.render('index.html')
}

exports.sendData = async (req, res) => {
  const project = new Project(req.body)
  await project.save()

  console.info('DATA SAVE SUCCESSFULLY')

  res.status(201).send('Data save successfully')
}

exports.getAllData = async (req, res) => {

  await Project.find((err, data) => {
    console.log(err)
    console.log('Get data successfull')

    if (err) {
      return res.status(500).json({
        error: 'database error'
      })
    }

    res.json(data)
  })

}