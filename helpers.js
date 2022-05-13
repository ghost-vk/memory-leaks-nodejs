const bytesToMb = (bytes) => {
  return Math.round(bytes / 1000, 2) / 1000
}

module.exports = {
  startAnalytics: (memoryUsageStore) => {
    setInterval(() => {
      console.clear()
      const usage = process.memoryUsage()
      const row = {
        rss: bytesToMb(usage.rss), // process resident set size
        heapTotal: bytesToMb(usage.heapTotal), // v8 heap allocated
        heapUsed: bytesToMb(usage.heapUsed), // v8 heap used
        external: bytesToMb(usage.external), // C++ allocated
        stack: bytesToMb(usage.rss - usage.heapTotal), // stack
      }
      memoryUsageStore.push(row)
      console.table(memoryUsageStore)
    }, 1000)
  },

  resetInterval: (intervalTimer, resetTime = 10000) => {
    setTimeout(() => {
      clearInterval(intervalTimer)
    }, resetTime)
  },

  stopAnalytics: (exitTime = 15000) => {
    setTimeout(() => {
      process.exit(0)
    }, exitTime)
  }
}
