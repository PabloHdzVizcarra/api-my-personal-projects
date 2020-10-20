const request = require('supertest');
const app = require('../../app')
require('dotenv').config();

describe('POST "/"', () => {

  const data = {
    name: 'Search Dog App',
    description: "App para buscar perros",
    urlGitHub: "www.github.com",
    urlDemo: 'www.netlify.com',
    img: 'www.cloudinary.com',
    technologies: 'react js'
  }

  test('should save data correctly', async () => {
    const res = await request(app).post('/').send(data)
    console.log(res.text);
    console.log(res.type);
    expect(res.status).toBe(201)
    expect(res.type).toBe('text/html')
  })

  test('if wrong data is sent, the database should ', async () => {
    const wrongData = {
      name: 'Search Dog App',
      description: "App para buscar perros",
      img: 'www.cloudinary',
      technologies: 'react js'
    }
    const res = await request(app).post('/').send(wrongData)
    expect(res.type).toBe('application/json');
    console.log(JSON.parse(res.text).errors);

  })
  
})
