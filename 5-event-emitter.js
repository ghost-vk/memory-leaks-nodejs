const {
  startAnalytics,
  resetInterval,
  stopAnalytics
} = require('./helpers')

const { EventEmitter } = require('events')

const memory = []

const ee = new EventEmitter()

const timer = setInterval(() => {
  ee.on('eventName', () => {})
})

startAnalytics(memory)
resetInterval(timer, 10000)
stopAnalytics(15000)

