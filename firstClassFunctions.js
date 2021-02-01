// Function statement aka declaration
a(); //possible
function a() {
  console.log(" a is called ");
}
a(); //possible

// ------------------------------------------------

// function expression
b(); //not possible
var b = function b() {
  console.log( "function can be assigned to variable in js" );
}
b(); //possible

// difference between function statement and function expression is hoisting.


// ------------------------------------------------


//anonymous functions
function () {

}// it will thrw error cause function statements required name

//but we can use anonymous functions by assigning them to variable:
var a = function () {

}// it will not throw error


// ------------------------------------------------


//Named function expresssion:
// giving name to anonymous function is named function

var a = function b() {
  console.log(b); //possible
}
a(); //possible
b() // not possible | will throw error


// ------------------------------------------------


// Parameters and arguments

var  a = function (param1, param2) {
  console.log("these are params");
}

a(1,2) //  these are arguments


// ------------------------------------------------


// First class functions
// ability of functions to be used as values and to be ppassed as arguments is known as first class functions.
// we can pass functions inside functions as an arguments.

var a = function (param1) { // it will behave same with let and const
  return function () {

  }
}

console.log(b());

//First class citizens are also known as first class functions.


// ------------------------------------------------

