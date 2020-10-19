const request = require("supertest")
const app = require('../../app')

describe('GET "/"', () => {
  test('should respond with text/html', async() => {
    const response = await request(app).get("/")
    expect(response.status).toBe(200)
    expect(response.type).toBe('text/html')
  })
  
})

