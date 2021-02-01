// // callback functions

// setTimeout(function () {
//   console.log("Timer");
// }, 5000)

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// })
// //function y is known as callback function

//click handler:
// document.getElementById("clickMe")
// .addEventListener("click", function xyz() {
//   console.log("Button is clicked");
// });

//click handler using closure
function attach() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button is clicked", ++count);
  });
}
attach();
