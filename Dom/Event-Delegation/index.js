
var table = document.getElementById('table')
console.log(table)

function tableClick(e) {
  console.log('click')
  console.log(e.target)
}

table.addEventListener('click', tableClick)