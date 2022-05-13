const fs = require('fs')
const {
  startAnalytics,
  resetInterval,
  stopAnalytics
} = require('./helpers')

const memory = []

let descriptor = 0

const timer = setInterval(() => {
  for (let i = 0; i < 3; i += 1) {
    fs.open('3-descriptor.js', (err, fd) => {
      descriptor = fd
    })
  }
}, 5)

startAnalytics(memory)
resetInterval(timer, 10000)
stopAnalytics(15000)

