

setImmediate(() => {
  console.log('\nSome operation!\n')
})

process.on('unhandledRejection', function (err) {
  console.error(err)
  process.exit(1)
})

Promise.reject(new Error('Some error!'))


