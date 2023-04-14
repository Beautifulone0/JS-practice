var todoForm = document.getElementById('to-do')
var li = document.getElementById('todo-list')
var todoList = [
  {
    title: 'wake up pray',
    description: ' wake up pray bath get ready for the day',
    completed: false
  },

  {
    title: 'wake up pray',
    description: ' wake up pray bath get ready for the day',
    completed: false
  },

  {
    title: 'wake up pray',
    description: ' wake up pray bath get ready for the day',
    completed: false
  }
]



todoForm.addEventListener('submit', function(e){
  e.preventDefault()

  addTodo(e.target.title.value)

  //e.target.title.value = ''
  //console.log(e.target.title.value);

  //var element = document.createElement('li')
  //element.innerText = e.target.title.value

 //li.appendChild(element)
})



var x = ['a', 'b', 'c']

//for(i = 0; i<x.length; i++){
//  var element = document.createElement('li')
//  element.innerText = x[i]
//
//  ul.appendChild(element)
//}



var displayTodo = function () {
  ul.innerText = ''

  todoList.forEach(function (todo){

    var element = document.createElement('li')
    element.innerText = todo.title
  
    ul.appendChild(element)
  
  })
}
displayTodo()
displayTodo()

//var displayTodo = function(){
//  ul.innerHTML = ''
//  x.forEach(function(todo){
//     var element = document.createElement('li')
//     element.innerText = todo.title
//     ul.appendChild(element)
//  })
//}

var addTodo = function (txt) {
  //create the todo object
  // add the to do object to the todo array

  var T = {
    title: txt,
    description: '',
    completed: false
  }

  todoList.push(T)
  displayTodo()
}

displayTodo()