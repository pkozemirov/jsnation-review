

setImmediate(() => {
  console.log('\nSome operation!\n')
})

Promise.reject(new Error('Some error!'))


