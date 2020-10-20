const request = require("supertest")
const app = require('../../app')
const mongoose =  require('../../models/projects-schema')

describe('call route "/"', () => {
  
  const project = jest.spyOn(mongoose, 'Project').mockReturnValue({
    name: "success"
  })

  const data = {
    name: "Search Dog App",
    img: 'www.cloudinary.com',
    urlDemo: 'www.netlify.com',
    urlGitHub: 'www.github.com',
    description: 'una aplicacion sencilla donde puedes buscar perros por su tipo de raza',
    technologies: 'React JS' 
  }

  test('POST "/" ', async() => {
    const response = await request(app).post("/").send(data)

    console.log(response.text);
    console.log(response.status);
  })
  
})

