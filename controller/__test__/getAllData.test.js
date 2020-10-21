const request = require('supertest');
const app = require('../../app')
require('dotenv').config();

describe('GET "/projects"', () => {
  test('should respond with text/html', async () => {
    const res = await request(app).get('/projects')
    expect(res.type).toBe('application/json')
    expect(res.status).toBe(200)
  })
})
