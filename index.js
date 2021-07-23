function centuryFind(year) {
  if (isNaN(year) || !Number.isInteger(year)) throw new Error('Year should be an integer!')
  if (year < 0) return `B.C. ${-Math.floor(year / 100)}`
  return Math.ceil(year / 100)
}
module.exports = centuryFind
