console.log("Start");

setTimeout(function a() {
  console.log("Callback");
}, 5000)

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate
while (endDate <= startDate + 10000) {
  endDate = new Date().getTime()
}

console.log(" while done ");

// output:
//   start => end => while done(after 20 sec) => callback(immediately)

// -------------------------------------------------------------

// setTimeout 0
console.log("Start");

setTimeout(function a() {
  console.log("Callback");
}, 0)

console.log("End");

// output:
//   start => end => callback
//   why? : coz setTimeout is pushed in apis environment and then event loop will wait till call stack becomes empty and then setTimeout is executed.


// another way
console.log("Start");

function a() {
  console.log("Callback");
}

setTimeout(a, 0)

console.log("End");