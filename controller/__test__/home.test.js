const request = require('supertest');
const app = require('../../app')
require('dotenv').config();

describe('GET "/"', () => {

  test('should respond with text/html', async () => {
    const res = await request(app).get('/')
    expect(res.type).toBe('text/html')
    expect(res.status).toBe(200)
  })
  
})

