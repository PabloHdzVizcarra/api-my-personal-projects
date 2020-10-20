const { Project } = require("../models/projects-schema")

exports.home = (req, res) => {
  console.log('Success')
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
    console.log('Get data successfull')
    
    if (err) {
      console.error(err)
      return res.status(500).json({
        error: 'database error'
      })
    }
    
    res.json(data)
  })

}

exports.deleteData = async (req, res) => {
  
  try {
    const dataDelete = await Project.findByIdAndDelete(req.params.id)

    if (!dataDelete) return res.status(400).send("No item found")

    console.info('DELETE DATA')
    res.status(201).send('Delete data success')
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'No item found'
    })
  }

}