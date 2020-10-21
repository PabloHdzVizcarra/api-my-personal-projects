const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: String,
  img: String,
  urlGitHub: String,
  urlDemo: String,
  description: String,
  technologies: Array
})

const Project = mongoose.model('projects', projectsSchema)

module.exports = {
  Project
}