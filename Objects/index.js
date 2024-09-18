//How to create objects

//Object literal way

// var person1 = {
//   name: 'sachin',
//   age: 40,
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person1)

// var person2 = {
//   name: 'kohli',
//   age: 30,
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person2)

//factory function

// function factory(name, age) {
//   return {
//     name: name,
//     age: age,
//     play: function () {
//       console.log('play')
//     }
//   }

// }

// var person1 = factory('sachin', 40)
// var person2 = factory('kohli', 30)
// console.log(person1)
// console.log(person2)


// constructor function

// function Test(name, age) {
//   this.name = name;
//   this.age = age;
//   this.play = function () {
//     console.log('play')
//   }
// }

// var person1 = new Test('sachin', 40)
// var person2 = new Test('kohli', 30)

// console.log(person1)
// console.log(person2)

//Classical way

// class Myclass{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.play = function () {
//       console.log('play')
//     }
//  }
// }
// console.log(typeof Myclass)
// var person1 = new Myclass('sachin', 40)
// var person2 = new Myclass('kohli', 30)
// console.log(person1)
// console.log(person2)

//Objects are dynamic


// var person = {
//   name: 'sachin',
//   age: 40,
//   play: function () {
//     console.log('play')
//   }
// }
// console.log(person)
//1) how to access or read object properties
// console.log(person.name)
// console.log(person['age'])
// console.log(person['play'])

//2) how to add new properties to object

// person.city = 'mumbai'
// person.go = function(){}
// console.log(person)

//3) How to delete existing properties from object

// delete person.age
// delete person.go

// console.log(person)

// 4) How to update object properties

// person.name = 'kohli'

// console.log(person)

//How to loop object

// var person = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person)

//without using loop

// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// person.play()

//with using loop

// for in loop

// for (var key in person) {
//   console.log(key, person[key])
// }

//Object.keys()

// var keys = Object.keys(person)
// console.log(keys)

// Object.values

// var values = Object.values(person)

// console.log(values)

// Object.entries

// var entries = Object.entries(person)
// console.log(entries)


//Copy or clone

//primitives

// var x = 10

// var y = x

// console.log(x)
// console.log(y)

// y = 20
// console.log(x)
// console.log(y)

//reference (object)

var originalObj = {
  name: 'sachin',
  address: { road: 101 },
  play: function () {
    console.log('play')
  }
}


//copy

// import lodash from 'lodash'
// var lodash = require('lodash')

// var copiedObj = originalObj //normal copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) //deep copy
// var copiedObj = lodash.cloneDeep(originalObj) //deep copy
// var copiedObj =  Object.assign({}, originalObj)//shallow copy(ES-5)
var copiedObj =  {...originalObj} //shallow copy(ES-6)


copiedObj.name = 'kohli'
copiedObj.address.road = 201

console.log(originalObj)
console.log(copiedObj)

