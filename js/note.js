let myVariable;
myVariable = 'Alexis';

let myVariable2 = 'Alex';

myVariable = 'Diana';


/* This is a multi-line comment */
//this is a comment

//variables
/*
let myVariable = 'bob'; //STRINGS
let myNumber = 3; //NUMBER
let myBoolean = true; //BOOLEANS
let myBoolean = false;

let myArray = [1, 'bob', true]; //ARRAYS

let myObjects = document.querySelector('p'); //OBJECTS, BUT ALL THE ABOVE ARE OBJECTS TOO

//OPERATORS
6 + 9; //addition
'Hello' + 'World' //string addition --> 'HelloWorld'

//subtraction --> -
//multiplication  --> *
//division --> /

//assignment --> =
//equality
myNumber === 4; // <-- this will result in false

//not, does-not-equal
!(myNumber === 3); // !(true) = false;
myVariable !== 3; //fals
*/



//conditionals

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('yay, I love chocolate ice cream');
} else {
  alert('aww, but chocolate is my fave');
}

//event listeners

document.querySelector('html').addEventListener('click',
function() {
  alert('Ouch! Stop poking me!');
}
