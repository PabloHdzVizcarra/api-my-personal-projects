const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: String,
  img: String,
  urlGitHub: String,
  urlDemo: String,
  description: String,
  technologies: String
})

const Project = mongoose.model('Projects', projectsSchema)


module.exports = {
  Project
}