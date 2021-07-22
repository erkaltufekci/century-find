const centuryFind = require('../index.js')

describe('century find test', () => {
  it('convert the year to century', () => {
    const result = centuryFind(1)

    expect(result).toBe(1)
  })

  it('convert the year to century', () => {
    const result = centuryFind(1000)

    expect(result).toBe(10)
  })

  test('convert the year to century', () => {
    expect(() => {
      centuryFind('abc')
    }).toThrow()
  })
})

// test('throws on octopus', () => {
//   expect(() => {
//     drinkFlavor('octopus')
//   }).toThrow()
// })
