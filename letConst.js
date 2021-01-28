// let and const stored in different space | we cannot access them without declations.


//error 
console.log(a);
let a = 10 


// no error
let a = 10
console.log(a);


//temporal dead zone
console.log(a);  // logged before initialization
// .
// .
// .
// .
// this is temporal dead zone until a is initialized (phase from hoisting till it assigned or get somme value is dead zone)
let a = 10


// ReferenceError undefined
console.log(a);
let a = 100


// reference error not defined
console.log(x);
let a = 100


// let declarations can only be used once
console.log(a);
console.log("this will also not executed");
let a = 10
let a = 100
var a = 1000
// ths will give syntax error


// redeclaration is possible in case of var 
var b = 10
var b = 1000


// difference bet let and const 

// let:
let a;
a = 10;
console.log(a);
//we cannot do above thing while using const