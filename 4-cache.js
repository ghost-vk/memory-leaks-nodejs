const fs = require('fs')
const {
  startAnalytics,
  resetInterval,
  stopAnalytics
} = require('./helpers')

const memory = []

const fileCache = new Map()

let k = 0

const timer = setInterval(() => {
  k += 1
  fs.readFile('4-cache.js', 'utf-8', (err, content) => {
    fileCache.set('4-cache.js' + k, content)
  })
}, 5)

startAnalytics(memory)
resetInterval(timer, 10000)
stopAnalytics(13000)

