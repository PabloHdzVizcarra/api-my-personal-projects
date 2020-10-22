const { Project } = require("../models/projects-schema");
const { convertStringToArray } = require("../modules/convertStringToArray");
const {modifyDataBeforeSaving} = require("../modules/modifyDataBeforeSaving");

exports.home = (req, res) => {
  res.render('index.html')
}

exports.sendData = async (req, res) => {
  const data = modifyDataBeforeSaving(
    req.body,
    convertStringToArray(req.body.technologies, ",")
  )

  const project = new Project(data)
  await project.save()
  console.info('DATA SAVE SUCCESSFULLY')

  res.status(201).send('Data save successfully')

}

exports.getAllData = async (req, res) => {

  await Project.find((err, data) => {
    console.log('Get data successfull')
    
    if (err) {
      return res.status(500).json({
        error: 'database error'
      })
    }
    
    console.log(data)
    res.json({data: data})
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
