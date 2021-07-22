function centuryFind(year) {
  if (isNaN(year) || !Number.isInteger(year)) throw new Error('Year should be an integer!')
  return Math.ceil(year / 100)
}
module.exports = centuryFind
