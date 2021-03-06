const {
  startAnalytics,
  resetInterval,
  stopAnalytics
} = require('./helpers')

const memory = []
let k = 0

const timer = setInterval(() => {
  k += 1
  const key = 'globalVariable_' + k
  global[key] = new Array(1000).fill(key)
}, 5)

startAnalytics(memory)
resetInterval(timer, 10000)
stopAnalytics(15000)
