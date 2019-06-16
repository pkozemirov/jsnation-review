

setImmediate(() => console.log(5))
setTimeout(() => console.log(4))
Promise.resolve().then(() => console.log(3))
process.nextTick(() => console.log(2))
console.log(1)


