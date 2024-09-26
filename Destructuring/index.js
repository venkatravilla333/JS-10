

// var obj = {
//   name: 'sachin',
//   age: 40,
//   address: { city: 'mumbai', road: 101, properties: {cars: 10, bats: 5, cash: '1cr'} },
//   children: ['sara', 'arjun']
// }

// // without destructuring

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.address.city)
// console.log(obj.address.road)
// console.log(obj.address.properties.cars)
// console.log(obj.address.properties.bats)
// console.log(obj.address.properties.cash)
// console.log(obj.children[0])
// console.log(obj.children[1])

// //with destructuring

// var { name, age,  address:{city, road, properties: {cars, bats, cash}}, children:[c1, c2] } = obj
// // var {city, road} = address

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)
// console.log(cars)
// console.log(bats)
// console.log(cash)
// console.log(c1)
// console.log(c2)

// var obj = {
//   name: 'sachin',
//   address: { city: 'dehli' },
//   relatives: ['dhoni', 'kohli', 'gill'],
//   properties: {
//     cash: '2cr', car: { color: 'while', price: 1000000, start: function () { console.log('start')},persons: ['sara', 'arjun']
//   }}
// }
// with destructuring
// var { name, address:{city}, relatives:[r1, r2, r3], properties:{cash, car:{color, price, start, persons:[p1, p1]}} } = obj

// console.log(name)
// console.log(city)
// console.log(r1)
// console.log(r2)
// console.log(r3)
// console.log(cash)
// console.log(color)
// console.log(price)
// start()

var arr = ['sachin', { car: 'balono', persons: ['sachin', 'sara', 'arjun'] }]

// without destructuring

// console.log(arr[0])
// console.log(arr[1].car)
// console.log(arr[1].persons[0])
// console.log(arr[1].persons[1])
// console.log(arr[1].persons[2])


// with destructuring

var [name,{car, persons:[p1, p2, p3]}] = arr

console.log(name)
console.log(car)
console.log(p1)
console.log(p2)
console.log(p3)

