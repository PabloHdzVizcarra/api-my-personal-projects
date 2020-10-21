let func = require('../convertStringToArray')   

describe('Test in function convertStringToArray', () => {
  
  const convertStringToArray = jest.spyOn(func, "convertStringToArray")

  test('a string and a separator must be provided and the function must be return an array', () => {
    const string = 'PopOS, Ubuntu, Debian'
    const separator = ','

    expect(convertStringToArray(string, separator).length).toBe(3)
    expect(convertStringToArray(string, separator)).toEqual(['PopOS', 'Ubuntu', 'Debian'])

  })
  
})
