/* eslint-disable no-undef */
const centuryFind = require('../index')

describe('centuryFind function in index.js', () => {
  it('should give century 1 with input year 1', () => {
    const result = centuryFind(1)

    expect(result).toBe(1)
  })

  it('should give century 1 with input year 100', () => {
    const result = centuryFind(100)

    expect(result).toBe(1)
  })

  it('should give century 5 with input year 499', () => {
    const result = centuryFind(499)

    expect(result).toBe(5)
  })

  it('should give century 6 with input year 500', () => {
    const result = centuryFind(500)

    expect(result).toBe(5)
  })

  it('should give century 6 with input year 501', () => {
    const result = centuryFind(501)

    expect(result).toBe(6)
  })

  it('should give century 20 with input year 1923', () => {
    const result = centuryFind(1923)

    expect(result).toBe(20)
  })

  it('should give century B.C. 2 with input year -105', () => {
    const result = centuryFind(-105)

    expect(result).toBe('B.C. 2')
  })

  it('should give century B.C. 4 with input year -399', () => {
    const result = centuryFind(-399)

    expect(result).toBe('B.C. 4')
  })

  it('should give century B.C. 4 with input year -400', () => {
    const result = centuryFind(-400)

    expect(result).toBe('B.C. 4')
  })

  it('should give century B.C. 5 with input year -401', () => {
    const result = centuryFind(-401)

    expect(result).toBe('B.C. 5')
  })

  test('should give Error for wrong input', () => {
    expect(() => {
      centuryFind('abc')
    }).toThrow()
  })

  test('should give Error for wrong input', () => {
    expect(() => {
      centuryFind(hjöäh)
    }).toThrow()
  })

  test('should give Error for wrong input', () => {
    expect(() => {
      centuryFind('123')
    }).toThrow()
  })
})
