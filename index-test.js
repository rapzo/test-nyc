'use strict'

const assert = require('assert')
const factorial = require('./')

describe('factorial test', () => {

  it('should test for simple case', () => {
    assert(factorial(0) === 1)
  })

  it('should test for simple case', () => {
    assert(factorial(1) === 1)
  })

  it('should test for recursive case', () => {
    assert(factorial(6) === 720)
  })
})
