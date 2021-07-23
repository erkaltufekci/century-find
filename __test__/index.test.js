const centuryFind = require('../index.js')

describe('century find test', () => {
  it('convert the year to century', () => {
    const result = centuryFind(1)

    expect(result).toBe(1)
  })

  it('convert the year to century', () => {
    const result = centuryFind(100)

    expect(result).toBe(1)
  })

  it('convert the year to century', () => {
    const result = centuryFind(499)

    expect(result).toBe(5)
  })

  it('convert the year to century', () => {
    const result = centuryFind(750)

    expect(result).toBe(8)
  })

  it('convert the year to century', () => {
    const result = centuryFind(1923)

    expect(result).toBe(20)
  })

  it('convert the year to century', () => {
    const result = centuryFind(4684)

    expect(result).toBe(47)
  })

  it('convert the year to century', () => {
    const result = centuryFind(-105)

    expect(result).toBe('B.C. 2')
  })

  it('convert the year to century', () => {
    const result = centuryFind(-395)

    expect(result).toBe('B.C. 4')
  })

  test('convert the year to century', () => {
    expect(() => {
      centuryFind('abc')
    }).toThrow()
  })

  test('convert the year to century', () => {
    expect(() => {
      centuryFind(hjöäh)
    }).toThrow()
  })

  test('convert the year to century', () => {
    expect(() => {
      centuryFind('123')
    }).toThrow()
  })
})
