let func = require('../modifyDataBeforeSaving')

describe('Test in function modifyDataBeforeSaving', () => {

  const modifyDataBeforeSaving = jest.spyOn(func, 'modifyDataBeforeSaving')
  test('the function must return new object with the modfified data', () => {
    const obj = {
      name: "PopOS",
      feautures: ['Gnome', 'Debian']
    }

    const feautures = 'PopOS Best Distro'

    expect(modifyDataBeforeSaving(obj, 'feautures', feautures)).toEqual({
      name: 'PopOS',
      feautures: feautures
    })
    expect(obj).toBe(obj)

  })
  
  
})
