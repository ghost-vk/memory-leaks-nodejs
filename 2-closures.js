const {
  startAnalytics,
  resetInterval,
  stopAnalytics
} = require('./helpers')

const memory = []

const recursiveClosure = (arr) => fn => recursiveClosure(arr.map(g => fn(g)))
let f = recursiveClosure(new Array(1000).fill(x => x*2))

const timer = setInterval(() => {
  f = f(fn => x => fn(x) * 2)
}, 5)

startAnalytics(memory)
resetInterval(timer, 10000)
stopAnalytics(15000)


