//conditionals if elseif else statements
let user = 5 /*prompt('Welcome user please enter your age')*/

if (user >= 18 && user <= 30){
  console.log('yippee welcome to our site')
} else if ( user > 30) {
  console.log('sorry you are not eligible for this site you are too old')
} else {
  console.log('this site is for age range 18-30')
}

let user2 = 5
if (user2 > 30){
  console.log('sorry you are not eligible for this site you are too old')
} else if ( user2 >= 18) {
 console.log('yippee welcome to our site')
} else {
  console.log('this site is for age range 18-30')
}

//data types

//strings
 var name ='faith'
//number
 var age = 23
// boolean
var isSingle = false
// arrary 
var cars = ['tacoma hilux', 'benz', 'toyota' ]
console.log(cars[0])
// objects
var person = {
  name: 'faith kalu',
  age: 23,
  city: 'San Francisco',
  job: 'web developer'
}
console.log(person.name);
console.log(person.job);
// undefined and null
var jane ;
console.log(jane);
person = null;
console.log(person);

// functions 
let faith = function(){
  console.log("she is very BEAUTIFULL")
}
faith()

let faithKalu = function(F){
  console.log(F)
}
faithKalu('she is very beautifull')
faithKalu('she smells nice')


let faithKalu1 = function(B,Y){
  console.log(B+Y)
}
faithKalu1('she is a nice and a ', 'very intelligent girl')

let faithKaluO = function(){
  let B = 'She is very beautifull'
  let Y = 'she will make a good wife'
  console.log(`${B},${Y}`)
}
faithKaluO()

/*//HTML methods in js
//getElementById
let div1 = document.getElementById('div1')
console.log(div1);
//QUERY selector enables you select an html element based on several id,class e.t.c
let element = document.querySelector('.name') //give you the first
console.log(element);

let element1 = document.querySelectorAll('.name') //give you the first
console.log(element1);

let element2 = document.querySelector('#div1') //give you the first
console.log(element2);

// in terms of modifying the html elements
//innerHTML to add to an html element
let div2 = document.getElementById('div2')

let content = '<h1>I am a Nigerian</h1>'

div2.innerHTML = content
console.log(div2)
//innerText to replace an html element or text
let element3 =document.querySelector('p')

let text = 'I am an onyeani we are Abians from abia state'

element3.innerText = text
console.log(element3);

// creating elements in js
var element4 =document.querySelector('#div2')
var create = document.createElement('p')
create.innerText = 'a new element created from index,js'
element4.appendChild (create)

console.log(create)
console.log(element4);

var element4 =document.querySelector('#div2')
var create = document.createElement('p')
create.innerText = 'a new element created from index,js'

document.body.insertBefore(create, element4)

console.log(element4); */

// More on JS objects and functions

let obj = {
  name: 'joyce',
  age: 25,
  friends: ['janet', 'amaka', 'catherine'],
  greet: function() { 
    console.log('Say HELLO')
  }      // a function in an object is called a method
    
}
console.log(obj.name, obj.age, obj.friends)
console.log(obj.friends[2])
obj.greet()

// array,push
 let siblings = ['Janet', 'Amaka', 'choice', 'mine']
 console.log(siblings)
 console.log(siblings.push('zoe', 'zendeya'))
 console.log(siblings)

//practing conditionals
let greeting = '11:00am'
if (greeting <= '11:00am'){
  console.log('Hello good Morning');
} else if (greeting <='4:00pm') {
  console.log('Hello Good afternoon')
} else {
  console.log('Hello Good evening')
}

/*// JS Event listeners they refer to things that happen to an html element
 var element = document.querySelector('.name')

 element.addEventListener ('click', function() {
  element.innerHTML = 'Hello my name is faith kalu onyeani'
 })*/