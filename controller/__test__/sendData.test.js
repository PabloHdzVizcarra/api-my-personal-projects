const request = require("supertest")
const app = require('../../app')


describe('POST "/"', () => {

  test('should', async() => {
    const response = await request(app).post("/").send({ name: "Fun" })
    expect(1).toBe(1)
  })
  
})

