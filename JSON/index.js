


var jsObj = {
  name: 'sachin',
  age: 40,
  city: 'mumbai'
}

console.log('js object', jsObj)

var JSONObj = JSON.stringify(jsObj) //jsobj into json obj
console.log('JSON OBJ', JSONObj)

var resultjsObj = JSON.parse(JSONObj)//jsonobj into jsobj
console.log('result jsobj', resultjsObj)

