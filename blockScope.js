// if(true) log("this is if statement syntax where block is not used")


// if(true) {
//   var a = 10;
//   console.log(a);
// }


// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// //we cannot access let and const outside block thats why they are known as block scoped.
// //we can access var ouside block.


// //shadowing in var
// var a = 100;
// {
//   var a = 10; // this a is shadowing global space a.
//   let b = 20;
//   const c = 30;
//   console.log(a); // hence this will log 10
//   console.log(b);
//   console.log(c);
// }

// console.log(a); // it will also log 10 | cause js will take value of a = 100 at line no.1, but at line three block a shadows global space a hence js will take the value a = 10 for all further declarations.
// // a = 100 will transforms to a = 10 in global memory because of shadowing



// // shadowing in let
// let b = 100;
// {
//   var a = 10; 
//   let b = 20; // this a is shadowing global space b.
//   const c = 30;
//   console.log(a); 
//   console.log(b); // hence this will log 20
//   console.log(c);
// }

// console.log(b); // as we used let it will take global space b and log 100



// // shadowing in const
// const c = 100;
// {
//   var a = 10; 
//   let b = 20; 
//   const c = 30; // this a is shadowing global space b.
//   console.log(a); 
//   console.log(b); 
//   console.log(c); // hence this will log 30
// }

// console.log(c); // as we used let it will take global space b and log 100




//shadowing in function
let a = 100;
function x() {
  let a = 10;
  console.log(a); // it will print 10
}
x();
console.log(a); // it will print 100


// illegal shadowing
let a = 100;
{
  var a = 1000
}

// but this will work:
let a = 100;
function b(){
  var a = 1000   // cause here var is in functional scope
}


//lexical block scope:
const a = 100;
{
  const a = 200;
  {
    const a = 300;
    console.log(a); // it will print 300
  }
  console.log(a); // it will print 200
}
console.log(a); // it will print 100
