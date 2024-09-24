
//How to examine dom

// console.dir(document)

//How to read dom properties

// console.log(document.URL)
// console.log(document.title)
// console.log(document.all)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.doctype)
// console.log(document.domain)

// how to select dom elements

//id

// var paraone = document.getElementById('paraone')
// console.log(paraone)
// paraone.style.color = 'red'
// paraone.innerText = 'this is my para'

// class

// var domElements = document.getElementsByClassName('mypara')
// console.log(domElements)
// domElements[0].textContent = 'sachin'
// domElements[1].textContent = 'kohli'

// tagname

// var paraElemenets = document.getElementsByTagName('p')
// console.log(paraElemenets)

//query selector

// var paraoneElement = document.querySelector('#paraone')
// var paraoneElement = document.querySelector('.mypara')
// var paraoneElement = document.querySelector('p')
// console.log(paraoneElement)


//query selectorAll

// var domElements = document.querySelectorAll('#paraone')
// var domElements = document.querySelectorAll('.mypara')
// var domElements = document.querySelectorAll('p')
// console.log(domElements)

//Traversing of DOM

// var domElement = document.getElementById('mydiv')
// console.log(domElement)
// domElement.style.background = 'red'

// parent

// var parent = domElement.parentElement
// console.log(parent)

//siblings

// previous sibling

// var preSibling = domElement.previousElementSibling
// console.log(preSibling)
// preSibling.style.background = 'yellow'

// var nextSibling = domElement.nextElementSibling
// console.log(nextSibling)
// nextSibling.style.background = 'green'

//Childs

// var firstChild = domElement.firstElementChild

// console.log(firstChild)

// var lastChild = domElement.lastElementChild
// console.log(lastChild)

// var allChilds = domElement.children

// console.log(allChilds)

//How to create element by using js

// var para = document.createElement('p')
// console.log(para)

// para.innerText = 'this is para'

// var paraText = document.createTextNode('This is para')
// para.appendChild(paraText)
// para.id = 'myid'
// para.className = 'myclass'

// var body = document.getElementById('body')

// body.appendChild(para)

// var h1 = document.createElement('h1')

// console.log(h1)
// // h1.innerText = 'This is heading one'
// var HeadingText = document.createTextNode('This is heading one')
// h1.appendChild(HeadingText)
// h1.id = 'myheadingid'
// h1.className = 'myheadingclass'

// body.appendChild(h1)

// var div = document.createElement('div')
// div.innerText = 'This is my div'
// div.id = 'mydiv'
// console.log(div)

// body.insertBefore(div, para)

//How to update dom element

// var h6 = document.createElement('h6')
// h6.id = 'myh6'
// h6.innerText = 'This is heading six'
// console.log(h6)

// body.replaceChild(h6, h1)

//How to delete element from dom

// div.remove()
// body.removeChild(div)

// var button = document.getElementById('btn')
// console.log(button)

// function test() {
//   console.log('button clicked')
// }
// button.addEventListener('click', test, false)



