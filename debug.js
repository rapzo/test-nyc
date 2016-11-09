'use strict'

const envs = []

const debug = (msg) => {
  console.log(msg)
}

module.exports = (key) => {
  if (envs.indexOf(key) < 0) envs.push(key)
  return (msg) => {
    if (envs.indexOf(process.env.LOG) < 0) return
    debug(msg)
  }
}
