

// console.log('one')
// console.log('two')
// console.log('three')

// console.log('one')
// console.log('two')
// setTimeout(() => {
//   console.log('settimeout')
// }, 2000)
// console.log('three')


// console.log('hi')

// setTimeout(() => {
//   console.log('timer-1')
// }, 3000)

// Promise.resolve().then(() => console.log('PR-1')).then(() => console.log('PR-2'))

// setTimeout(() => {
//   console.log('timer-2')
// }, 1000)

// console.log('hello')

// setTimeout(() => {
//   console.log('timer-3')
// }, 0)

// console.log('bye')

//callbacks

// var data

// function fetchData(num, displayData) {
//   setTimeout(() => {
//     // data = { pName: 'apple', pPrice: 100 }
//     data = num*num
//     displayData(data)
//   }, 4000)
// }
// fetchData(2, (data1)=> {
//   console.log(data1);
//   fetchData(data1, (data2) => {
//     console.log(data2)
//      fetchData(data2, (data3) => {
//        console.log(data3);
//        fetchData(data3, (data4) => {
//          console.log(data4);
//           fetchData(data4, (data5) => {
//             console.log(data5);
//             fetchData(data5, (data6) => {
//               console.log(data6);
//             });
//           });
//        });
//      });
//   })
// });

var data
function fetchData() {
  var pr = new Promise((res, rej) => {
    setTimeout(() => {
      data = { pName: 'apple', pPrice: 100 }
      res(data);
    }, 4000)
  })
  console.log(pr)
  return pr
}

fetchData().then(
  function displayData(data) {
  console.log(data)
}
)


// displayData()

