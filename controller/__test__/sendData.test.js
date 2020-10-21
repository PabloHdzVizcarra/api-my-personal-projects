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
    expect(res.status).toBe(201)
    expect(res.type).toBe('text/html')
  })

  test('if the data sent does not include the name property it should return an error', async () => {
    const wrongData = {
      description: "App para buscar perros",
      urlGitHub: "www.github.com",
      urlDemo: 'www.netlify.com',
      img: 'www.cloudinary.com',
      technologies: 'react js'
    }
    const response =
      await request(app).post('/').send(wrongData)
    
    expect(response.type).toBe('application/json')
    expect(response.status).toBe(422)
    expect(JSON.parse(response.text).error).toBe(true)
  })

  test('if the data sent does not include the description property it should return an error', async () => {
    const wrongData = {
      name: 'Search Dog App',
      urlGitHub: "www.github.com",
      urlDemo: 'www.netlify.com',
      img: 'www.cloudinary.com',
      technologies: 'react js'
    }
    const response =
      await request(app).post('/').send(wrongData)
    
    expect(response.type).toBe('application/json')
    expect(response.status).toBe(422)
    expect(JSON.parse(response.text).error).toBe(true)
  })

  test('if the data sent does not include the urlGitHub property it should return an error', async () => {
    const wrongData = {
      name: 'Search Dog App',
      description: "App para buscar perros",
      urlDemo: 'www.netlify.com',
      img: 'www.cloudinary.com',
      technologies: 'react js'
    }
    const response =
      await request(app).post('/').send(wrongData)
    
    expect(response.type).toBe('application/json')
    expect(response.status).toBe(422)
    expect(JSON.parse(response.text).error).toBe(true)
  })

  test('if the data sent does not include the urlDemo property it should return an error', async () => {
    const wrongData = {
      name: 'Search Dog App',
      description: "App para buscar perros",
      urlGitHub: "www.github.com",
      img: 'www.cloudinary.com',
      technologies: 'react js'
    }
    const response =
      await request(app).post('/').send(wrongData)
    
    expect(response.type).toBe('application/json')
    expect(response.status).toBe(422)
    expect(JSON.parse(response.text).error).toBe(true)
  })

  test('if the data sent does not include the img property it should return an error', async () => {
    const wrongData = {
      name: 'Search Dog App',
      description: "App para buscar perros",
      urlGitHub: "www.github.com",
      urlDemo: 'www.netlify.com',
      technologies: 'react js'
    }
    const response =
      await request(app).post('/').send(wrongData)
    
    expect(response.type).toBe('application/json')
    expect(response.status).toBe(422)
    expect(JSON.parse(response.text).error).toBe(true)
  })

  test('if the data sent does not include the technologies property it should return an error', async () => {
    const wrongData = {
      name: 'Search Dog App',
      description: "App para buscar perros",
      urlGitHub: "www.github.com",
      urlDemo: 'www.netlify.com',
      img: 'www.cloudinary.com',
    }
    const response =
      await request(app).post('/').send(wrongData)
    
    expect(response.type).toBe('application/json')
    expect(response.status).toBe(422)
    expect(JSON.parse(response.text).error).toBe(true)
  })
  
})
