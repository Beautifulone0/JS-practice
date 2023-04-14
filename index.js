const todos = [
  {
    id: 1,
    text: 'wake up and pray',
    isCompleted: false
  },

  {
    id: 2,
    text: 'eat something',
    isCompleted: true
  },

  {
    id: 3,
    text: 'practice java script',
    isCompleted: true
  }
]
console.log(todos)
//how to add to a server json.stringify
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

todos.forEach(function(todo){
  console.log(todo.text) 
})

const todoText=todos.map(function(todo){
  return todo.text
})
console.log(todoText)

const todoTexts=todos.filter(function(todo){
  return todo.isCompleted === true
}).map(function(todo){
  return todo.text
})
console.log(todoTexts)

//conditinals
// if 
const b = 23;

if(b == 23) {
  console.log('b is 23')
}
// if else
const c = 25;

if(c == 23) {
  console.log('c is not 23')
}else {
  console.log('b is 23');
}
// if, else if, else
const a = 25;
const d = 23;

if(a == 15) {
  console.log('a is 15');
} else if (a < 23) {
  console.log('a is less than 23')
} else {
  console.log('d is 23')
}
//tenery operators
const x = 12

const color = x == 12 && x > 15 ? 'x is red' : 'x is blue'
console.log(color);

let name = 'Faith kalu onyeani';
let age = '23 years old';
let religion = ' christain';
let personality ='friendly, kind, and charming'
let friends = 'collins, lade, iyke and glory'

console.log(name, age, religion, personality, friends);
console.log(name+age+religion+personality+friends)
console.log(`my name is ${name} i am ${age} i am a ${religion} i am ${personality} my friends are ${friends}`)

//conditionals if elseif else statements
let user = 31 /*prompt('Welcome user please enter your age')*/

if (user >= 18 && user <= 30){
  console.log('yippee welcome to our site')
} /*else if (user > 18) {
  console.log('ooops sorry you are not eligible')*/
/*}*/ else if ( user > 30) {
  console.log('sorry you are not eligible for this site you are too old')
} else {
  console.log('this site is for age range 18-30')
}