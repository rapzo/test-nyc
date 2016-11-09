'use strict'

const debug = require('./debug')('nyc')

const factorial = module.exports = (n) => {
  debug(`n = ${n}`)
  if (!n) return 1
  else if (n === 1) return 1
  return n * factorial(n - 1)
}
