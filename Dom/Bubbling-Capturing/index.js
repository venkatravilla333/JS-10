

var parent = document.getElementById('parent')
var child = document.getElementById('child')
var subchild = document.getElementById('subchild')

function parentFun(e) {
  // console.log(e)
  console.log('parent')
}

parent.addEventListener('click', parentFun, false)

function childFun(e) {
  // console.log(e)
  console.log('child')
}
child.addEventListener('click', childFun, false)

function subchildFun(e) {
  console.log(e)
  console.log(e.clientX)
  console.log(e.clientY)
  console.log(e.offsetX)
  console.log(e.offsetY)
  // e.stopPropagation()
  console.log('subchild')
}
subchild.addEventListener('click', subchildFun, false)