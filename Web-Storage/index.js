

console.log(window)

//Local storage

// how to store data

var lstoreBtn = document.getElementById('lstore')

function lstoreFun() {
  localStorage.setItem('name', 'gill')
  localStorage.setItem('age', 30)
}
lstoreBtn.addEventListener('click', lstoreFun)

//how to get value from local storage

var lgetBtn = document.getElementById('lget')

function lgetFun() {
  console.log(localStorage.getItem('name'))
  console.log(localStorage.getItem('age'))
  var nameh4 = document.createElement('h4')
  var ageh4 = document.createElement('h4')
  var name = localStorage.getItem('name')
  var age = localStorage.getItem('age')
  nameh4.innerText = name
  ageh4.innerText = age
  var lparent = document.getElementById('lparent')
  lparent.appendChild(nameh4)
  lparent.appendChild(ageh4)

}
lgetBtn.addEventListener('click', lgetFun)

//how to delete values from local storage

var lremoveBtn = document.getElementById('lremove')

function lremoveFun() {
  localStorage.removeItem('name')
  localStorage.removeItem('age')
}

lremoveBtn.addEventListener('click', lremoveFun)

//How to remove all data from local storage

var lclearBtn = document.getElementById('lclear')

function lclearFun() {
  localStorage.clear()
}
lclearBtn.addEventListener('click', lclearFun)

//local storage

var sstoreBtn = document.getElementById('sstore');

function sstoreFun() {
  sessionStorage.setItem('name', 'pawa kalyan');
  sessionStorage.setItem('age', 40);
}
sstoreBtn.addEventListener('click', sstoreFun);

//how to get value from session storage

var sgetBtn = document.getElementById('sget');

function sgetFun() {
 
  var nameh4 = document.createElement('h4');
  var ageh4 = document.createElement('h4');
  var name = sessionStorage.getItem('name');
  var age = sessionStorage.getItem('age');
  nameh4.innerText = name;
  ageh4.innerText = age;
  var lparent = document.getElementById('sparent');
  lparent.appendChild(nameh4);
  lparent.appendChild(ageh4);
}
sgetBtn.addEventListener('click', sgetFun);

//how to delete values from session storage

var sremoveBtn = document.getElementById('sremove');

function sremoveFun() {
  sessionStorage.removeItem('name');
  sessionStorage.removeItem('age');
}

sremoveBtn.addEventListener('click', sremoveFun);

//How to remove all data from local storage

var sclearBtn = document.getElementById('sclear');

function sclearFun() {
  sessionStorage.clear();
}
sclearBtn.addEventListener('click', sclearFun);