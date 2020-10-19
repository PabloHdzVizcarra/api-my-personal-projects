const { Project } = require("../models/projects-schema")


exports.home = (req, res) => {
  res.render('index.html')
}

exports.sendData = async (req, res) => {
  const project = new Project(req.body)
  await project.save()
  console.log(project);

  res.status(200).json({"exito": "true"})
}