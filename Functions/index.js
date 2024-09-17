//how to define a function

//function declaration syntax

// function test() {
  
// }
// test()

//function exp

// named function exp

// var x = function test() { };

//ananymous function exp

// var y = function () { };

//arrow function exp

// var z = ()=>{};

//parameters and arguments and default parameters


// function test(x, y, a = 100) {
//   var z = 3
//   console.log(x, y, z, a)
// }
// test(1,2)

// function interview(a = 100, b = 'sachin', c = undefined) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
// interview(undefined, null, undefined)

// varying no of params & arguments

// function vary(a, b, c) {
//   // console.log(a, b, c)
//   var sum = a + b + c
//   console.log(sum)
// }
// vary(1, 2, 3, 4, 5 )

//arguments object

// function vary() {
//   var sum = 0
  // console.log(arguments[0])  
  // console.log(arguments[1])  
  // console.log(arguments[2])  
  // console.log(arguments[3])  
  // console.log(arguments[4])  
  // console.log(typeof arguments)
  // console.log(Array.isArray(arguments))
//   for (var value of arguments) {
//     console.log(value)
//     sum += value
//   }
//   console.log(sum)

// }
// vary(1, 2, 3, 4, 5)

//rest parameter

// var restParam = (...rest) => {
//   var sum = 0
//   console.log(rest[0])
//   console.log(rest[1])
//   console.log(rest[2])
//   console.log(rest[3])
//   console.log(rest[4])
//   for (var value of rest) {
//     console.log(value)
//     sum += value 
//   }
//   console.log(sum)
// }
// restParam(1,2,3,4,5)


//scope

// storage in global 
// var a = 1
// let b = 2
// const c = 3

//access in global
// console.log(a)
// console.log(b)
// console.log(c)

function test() {
  //storage in function
  // var d = 4
  // let e = 5
  // const f = 6
  // // access 
  // console.log(a)
  // console.log(b)
  // console.log(c)
  // console.log(d)
  // console.log(e)
  // console.log(f)
  
  if (true) {

    //storage in block
    // var g = 7
    // let h = 8
    // const i = 9
    //access
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(d)
    // console.log(e)
    // console.log(f)
    // console.log(g)
    // console.log(h)
    // console.log(i)
    
  }
  // console.log(g);
  // console.log(h);
  // console.log(i);
  

}

// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)
// test()

//hoisting

// all variable declarations

// console.log(a)
// let a = 'sachin'
// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = { name: 'kohli', age: 30 }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// // console.log(h)
// // h()
// let h = function test() {
//   console.log('named fun exp')
// }
// console.log(h)

// console.log(i)
// var i = function () {
//   console.log('ananymous fun exp')
// }
// console.log(i)

// console.log(j)
// var j = () => {
//   console.log('arrow fun exp')
// }
// console.log(j)

// //function declaration syntax
// console.log(declare)
// declare()
// function declare() {
//   console.log('function declaration')
// }
// console.log(declare)

// var vs let vs const

//scope

//hoisting

//re-declaration
// let x = 10
// console.log(x)

// var x = 20
// console.log(x)
// const x = 20

//re-assignment

// var x = 10
// let x = 10
// const x = 10
// console.log(x)
// x = 'sachin'
// console.log(x)
// x = true
// console.log(x)

//Initialization

// var x
// let x
// const x
// console.log(x)
// x = 10
// console.log(x)


//interview

// var x = 1

// function test() {
//   console.log(x)
//   let x = 10
//   console.log(x)
// }
// test()
// console.log(x)
// var x = 1


//closure

// function outer() {
//   var x = 10
//  return function inner() {
//    var y = 100
//    console.log(x)
//    console.log(y)
//   }
// }
// var inner = outer()
// inner()




//IIFE

// var x = (()=> {
//   var a = 10
  
// })()
// console.log(a)

//Without curry

// function test(a,b,c) {
//   console.log(a+b+c)
// }
// test(1, 2, 3)

//with curry

// function one(a) {
//   return function two(b) {
//     return function three(c) {
//       console.log(a+b+c)
//     }
//   }
  
// }
// var two = one(1)
// var three = two(2)
// three(3)

//without curry
// function calPrice(price, dis) {
//   var disAmout = price * dis
//   console.log(disAmout)
// }
// calPrice(1000, .1)
// calPrice(1000, .2)
// calPrice(1000, .3)
// calPrice(1000, .4)
// calPrice(1000, .5)

// with curry

// function calPrice(price) {
//   return function calDis(dis) {
//     var disAmount = price * dis
//     console.log(disAmount)
//   }
// }
// var calDis = calPrice(1000)
// calDis(.1)
// calDis(.2)
// calDis(.3)
// calDis(.4)
// calDis(.5)


//first class functions

// var x = (test) => {
//   test()
//   return function inner() {
    
//   }
// }
// x(function test() {
//   console.log('test')
// })

//Hof

// function Hof(cb) {
//   console.log('hof')
//   function inner() {
//     console.log('inner')
//   }
//   inner()
//   cb()
// }
// Hof(function test() {
//   console.log('test')
// })

// callback

// function test(cb) {
//   console.log('hof')
//   cb()
// }
// test(function cb() {
//   console.log('callback')
// })

//pure vs impure

// function pure(a,b,c) {
//   console.log(a + b + c)
  
// }
// pure(1, 2, 3)

// function impure(a,b,c) {
//   var d = Math.random() * 10
//   console.log(a + b + c + d)
  
// }
// impure(1,2,3)

//function recurssion

// function factorial(n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(5);
// console.log(result);
