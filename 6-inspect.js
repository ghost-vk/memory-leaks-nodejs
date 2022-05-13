let k = 0

const collection = {}

setInterval(() => {
  k += 1
  const key = 'globalVariable' + k
  collection[key] = new Array(1000).fill(key)
}, 5)
