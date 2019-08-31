const symbol = Symbol.for('io.yucom.context.instance')

let instance = globalThis[symbol]

if (!instance) {
  instance = require('express-http-context')
  globalThis[symbol] = instance
}

module.exports = instance