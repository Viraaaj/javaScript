function x() {
  var i = 100;
  setTimeout(function () {
    console.log(i);
  }, 2000); // it will be printed later
  
  console.log("Hello JS"); // it will be printed first
}
x();

//printing 1 to 5 after some time interval
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
//this will print 6 after 1s of time interval because it is taking reference of variable which is stored.

//it will be fixed if we use let instead of var | cause let is block scoped | let will create new copy each time
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();

// how to do it with var?? | we have to create closure:
function x() {
  for (var i = 1; i <= 5; i++) {
    function y(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    y(i);
  }
}
x();
