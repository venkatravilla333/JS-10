

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

//promises (ES-6)

// var data
// function fetchData(num) {
//   var pr = new Promise((res, rej) => {
//     setTimeout(() => {
//       // data = { pName: 'apple', pPrice: 100 }
//       data = num*num
//       res(data);
//     }, 4000)
//   })
//   // console.log(pr)
//   return pr
// }

// fetchData(2)
//   .then((data1) => {
//     console.log(data1)
//     return fetchData(data1)
//   }).then((data2) => {
//     console.log(data2)
//     return fetchData(data2)
//   }).then((data3) => {
//     console.log(data3)
//     return fetchData(data3)
//   }).then((data4) => {
//     console.log(data4)
// })

//Promises with async and await (ES-6)

// var data

// function fetchData(num) {
// var pr =  new Promise((res, rej) => {
//     setTimeout(() => {
//       // data = {pName: 'apple', pPrice: 100}
//       data = num*num
//       res(data)
//     }, 4000)
// })
//   return pr
// }


// async function displayData() {
//  var data1 = await fetchData(2)
//   console.log(data1)
//  var data2 = await fetchData(data1)
//   console.log(data2)
//  var data3 = await fetchData(data2)
//   console.log(data3)
//  var data4 = await fetchData(data3)
//   console.log(data4)
// }
// displayData()


// Promise.all vs promise.allSettled vs promise.race

// var pr1 = new Promise((res, rej) => {
//   setTimeout(() => {
//    rej('pr-1')
//   }, 0)
// })
// var pr2 = new Promise((res, rej) => {
//   setTimeout(() => {
//    res('pr-2')
//   }, 1000)
// })
// var pr3 = new Promise((res, rej) => {
//   setTimeout(() => {
//    res('pr-3')
//   }, 4000)
// })

// Promise.all([pr1, pr2, pr3]).then((res)=> console.log(res))
// Promise.allSettled([pr1, pr2, pr3]).then((res)=> console.log(res))
// Promise.race([pr1, pr2, pr3]).then((res)=> console.log(res))




  


