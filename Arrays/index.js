

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//How to add new items to array

// starting

// arr.unshift('hi')
// console.log(arr)

//ending

// arr.push('bye')
// console.log(arr)

//anywhere

// arr.splice(0, 0, 0)
// console.log(arr)
// arr.splice(arr.length, 0, 'sachin')
// console.log(arr)
// arr.splice(2, 0, 100)
// console.log(arr)

//How to remove items from array

// starting

// arr.shift()

// console.log(arr)

//ending

// arr.pop()

// console.log(arr)


//anywhere

// arr.splice(0, 2)
// console.log(arr)

// arr.splice(arr.length - 1, 1)
// console.log(arr)

//How to remove all items from array

// arr.length = 0
// arr.splice(0, arr.length)
// arr = []
// console.log(arr)

//How to find array items

// primitives

// var arr = [1, 2, 3, 4, 3, 5, 3]

// console.log(arr.indexOf(3))
// console.log(arr.indexOf(30))

// console.log(arr.lastIndexOf(3))
// console.log(arr.lastIndexOf(30))

// console.log(arr.includes(3))
// console.log(arr.includes(30))

//reference

// var arr = [{course: 'react'}, {course: 'css'}]

// console.log(arr.indexOf({course: 'css'}))
// console.log(arr.lastIndexOf({course: 'css'}))
// console.log(arr.includes({course: 'css'}))

// console.log(arr)

// var result1 = arr.find((obj) => {
//   return obj.course === 'react'
// })
// console.log(result1)

// var result2 = arr.findIndex((obj) => {
//   return obj.course === 'html'
// })
// console.log(result2)

//How to loop array items

// var arr = [1, 2, 3, 4, 5]

// for of loop

// for (var value of arr) {
//   console.log(value)
// }

//forEach method

// var result = arr.forEach((v, i) => {
//   // console.log(v, i)
//   return 100
// })

// console.log(result)

//How to combine or merge two or more arrays

// ES-5

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = ['sachin', 'kohli']

// console.log(arr1)
// console.log(arr2)

// var combineArr = arr1.concat(arr2, arr3) //ES-5
// var combineArr = [...arr1, ...arr2, ...arr3]
// console.log(combineArr)

//Copy

// var originalArr = ['sachin', { road: 101 }, function play() { console.log('play') }]

// var copiedArr = originalArr //normal copy
// var copiedArr = JSON.parse(JSON.stringify(originalArr)) //deep copy
// var copiedArr = Object.assign([], originalArr) //shallow copy
// var copiedArr = originalArr.slice() //shallow copy
// var copiedArr = [...originalArr] //shallow copy (spread operator ES-6)

// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201

// console.log(originalArr)
// console.log(copiedArr)

//Testing of array items

// var arr = [-1, 1, 2, 3, 4, 5]

// var result = arr.some((item) => {
//     return   item > 0
// })

// console.log(result)

// var result = arr.every((item) => {
//     return   item > 0
// })

// console.log(result)

//filter

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)

// var filteredArr= arr.filter((item) => {
//   return item > 3
// })

// console.log(filteredArr)


//Map

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)

// var mappedArr = arr.map((item) => {
//  return  item*100
// })

// console.log(mappedArr)

// reduce method

var arr = [1, 2, 3, 4, 5]


var result = arr.reduce((cum, cur) => {
  console.log(cum, cur)
  return cum + cur
})

console.log(result)






