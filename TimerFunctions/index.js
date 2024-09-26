
// console.log(window)

var timeout = window.setTimeout(() => {
  console.log('timeout')
}, 4000)

var interval =setInterval(() => {
  console.log('interval')
}, 4000)

clearTimeout(timeout)
clearInterval(interval)