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

// var originalObj = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: function () {
//     console.log('play')
//   }
// }

//copy

// import lodash from 'lodash'
// var lodash = require('lodash')

// var copiedObj = originalObj //normal copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) //deep copy
// var copiedObj = lodash.cloneDeep(originalObj) //deep copy
// var copiedObj =  Object.assign({}, originalObj)//shallow copy(ES-5)
// var copiedObj =  {...originalObj} //shallow copy(ES-6)


// copiedObj.name = 'kohli'
// copiedObj.address.road = 201

// console.log('original obj' , originalObj)
// console.log('copied obj' , copiedObj)


// Math object

// var x = 10

// var y = 20

// var z = 10.5

// console.log(Math)
// console.log(Math.min(x, y, 5))
// console.log(Math.max(x, y, 5))
// console.log(Math.floor(z))
// console.log(Math.ceil(z))
// console.log(Math.round(z))
// console.log(Math.random()*100)
// console.log(Math.sqrt(9))
// console.log(Math.pow(3,3))

//Date object

// var now = new Date()
// console.log(now)
// console.log(now.getDate())
// console.log(now.getFullYear())
// console.log(now.getDay())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// console.log(now.setFullYear(2050))
// console.log(now.setDate(30))
// console.log(now.setHours(10))
// console.log(now)

//string format

// var date1 = new Date('2040 10 9:30:50')
// console.log(date1)
// console.log(date1.getFullYear())
// date1.setFullYear(2000)
// console.log(date1)

//number format

// var date2 = new Date(2005, 11, 2, 9, 30, 50)
// console.log(date2)
// console.log(date2.getFullYear())
// date2.setFullYear(2060)
// console.log(date2)

//Template string

// var name = 'sachin'

// var age = 40

//without template string (es-5)

// console.log('Hi this is' + ' ' + name + ' ' + 'my age is' + ' ' + age)

//es-6 template string

// console.log(`Hi this is ${name} my age is ${age}`)

// var msg = ' hi how are you '
// var msg = 'Hi how are you'
// var msg = 'Hi'
var msg = 'Hi bye bye'

//how to find string length
// console.log(msg.length)

//how to remove white spaces in string

// console.log(msg.length)
// console.log(msg.trimStart().length)
// console.log(msg.trimEnd().length)
// console.log(msg.trim().length)

//How to copy or extract a part of string

// console.log('original:', msg)
// var copymsg = msg.slice()
// var copymsg = msg.slice(0)
// var copymsg = msg.slice(0, 14)
// var copymsg = msg.slice(0, 6)
// var copymsg = msg.slice(3, 6)
// var copymsg = msg.slice(-3)

//subString

// var copymsg = msg.substring()
// var copymsg = msg.substring(0)
// var copymsg = msg.substring(0, 14)
// var copymsg = msg.substring(3, 6)
// var copymsg = msg.substring(-3)

//subStr

// var copymsg = msg.substr()
// var copymsg = msg.substr(0)
// var copymsg = msg.substr(0, 2)
// var copymsg = msg.substr(-3)

// console.log('copy:', copymsg)

//extracting a string character

// console.log(msg)
// var coyMsg = msg.charAt(0)
// var coyMsg = msg.charCodeAt()
// console.log(coyMsg)

//How to convert string case

// console.log(msg)
// var lower = msg.toLowerCase()
// var upper = msg.toUpperCase()
// console.log(lower)
// console.log(upper)

//How to concat new string

// console.log(msg)
// var concat = msg.concat(' sachin')
// console.log(concat)

//How to pad or add new data at start and end

// console.log(msg)
// var padStart = msg.padStart(10, 'bye')
// var padEnd = msg.padEnd(10, 4)
// console.log(padStart)
// console.log(padEnd)

//how to replace existing string

// console.log(msg)
// var replace = msg.replace('bye', 'hello')
// console.log(replace)

//How to convert string into array

// console.log(msg)
// var arr = msg.split()
// var arr = msg.split(' ')
// var arr = msg.split('')
// console.log(arr)

//How to find string

// console.log(msg)
// var foundfirst = msg.indexOf('bye')
// var foundfirst = msg.indexOf('sachin')
// var foundLast = msg.lastIndexOf('bye')
// var foundLast = msg.lastIndexOf('hello')
// var incldesValue = msg.includes('Hi')
// var incldesValue = msg.includes('hello')
// var startValue= msg.startsWith('Hi')
// var startValue= msg.startsWith('hello')
// var endValue= msg.endsWith('hello')
// var endValue= msg.endsWith('bye')
// console.log(foundfirst)
// console.log(foundLast)
// console.log(incldesValue)
// console.log(endValue)

//getters and setters

// var person = {
//   firstName: 'virat',
//   lastName: 'kohli',
// get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
//  set fullName(value) {
//    var parts = value.split(' ')
//    this.firstName = parts[0]
//    this.lastName = parts[1]
//   }
  
// }

// person.fullName = 'sachin tendulkar'
// console.log(person)
// console.log(person.fullName)


//this key word

// console.log(this)

// function test1() {
//   console.log(this)
// }
// test1()

// var test2 = () => {
//   console.log(this)
// }
// test2()

// var family1 = {
//   name: 'sachin',
//   age: 40,
//   outer (){
//     console.log(this)
//     var inner = ()=> {
//       console.log(this)
//       function hello  () {
//         console.log(this)
//       }
//       hello()
//     }
//     inner()
//   }
// }

// family1.outer()

// function Test() {
//   console.log(this)
//   this.name = 'sachin';
//   this.age = 40;
//   this.outer = function () {
//     console.log(this)
//     var inner =  ()=> {
//       console.log(this)
//       var hello = ()=> {
//         console.log(this)
//       }
//       hello()
//     }
//     inner()
//   }

  
// }
// var family1 = new Test()
// family1.outer()

// classical way

// class Myclass{
//   constructor() {
//     console.log(this)
//     this.name = 'sachin';
//     this.age = 40;
//     this.outer =  ()=> {
//       console.log(this)
//       var inner = ()=> {
//         console.log(this)
//         var hello =  ()=> {
//           console.log(this)
//         }
//         hello()
//       }
//       inner()
//     }
      
//  }
// }
// console.log(typeof Myclass)

// var family1 = new Myclass()
// family1.outer()

// changing of this referenece



// function test(a,b,c,d,e) {
//   console.log(this)
//   console.log(a,b,c,d,e)
// }

// var obj1 = {
//   name: 'sachin',
//   age: 40
// }

// test(1,2,3,4,5)
// test.call(obj1, 1,2,3,4,5 )
// test.apply(obj1, [1,2,3,4,5] )
// test.bind(obj1, 1,2,3,4,5)()


// var obj = {
//   name: 'sachin',
//   age: 40,
//   outer() {
//     console.log(this)
//     var inner = ()=> {
//       console.log(this)
//     }
//     inner()
    // inner.call(obj)
    // inner.apply(obj)
    // inner.bind(obj)()
  // }
// }

// obj.outer()










