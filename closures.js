// function x() {
//   var a = 12;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// how closure works:
// function a() {
//   var b = 100;
//   function c() {
//     console.log(b); // it will print 10 as it is pointing to reference b
//   }
//   b = 10;
//   return c; // we can also use c();
// }

// var z = a(); // we can assign function to variable
// console.log(z);
// z(); // it will print 100

// //when we execute code, iit will still remember its lexical scope and function though it is executed.

//here function y forms closure along with function x and function z
function z() {
  var b = 100;

  function x() {
    var a = 12;

    function y() {
      console.log(a, b);
    }
    a = 1000;
    y();
  }
  x();
}
z();
