


//get all data

var getAllBtn = document.getElementById('one')

function getAllFun() {
  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
  
}

getAllBtn.addEventListener('click', getAllFun)


//get single data
var getSingleBtn = document.getElementById('two');

function getSingleFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  
}

getSingleBtn.addEventListener('click', getSingleFun)

//send data

var sendDataBtn = document.getElementById('three')

var newData = {
  userId: 200,
  title: 'My title',
  body: 'my body'
}
function sendDataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
    .then((res) => console.log(res))
    .catch((err)=> console.log(err))
}

sendDataBtn.addEventListener('click', sendDataFun)

//update single data

var updateBtn = document.getElementById('four')

var updateData = {
  userId: 120,
  title: 'Hello Ap',
  body: 'Hello Pawan',
};

function updateFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/50', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updateData),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

updateBtn.addEventListener('click', updateFun)

//delete single data

var deleteBtn = document.getElementById('five')

function deleteFun() {

   fetch('https://jsonplaceholder.typicode.com/posts/50', {
     method: 'DELETE',
    
   })
     .then((res) => console.log(res))
     .catch((err) => console.log(err));

}

deleteBtn.addEventListener('click', deleteFun)


