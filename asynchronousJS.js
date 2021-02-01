console.log("Starting");

setTimeout(function a() {
  console.log("Callback function");
}, 2000); // js engine will hold it for 2 sec in web API's environment

console.log("End");



// fetch()
console.log("Starting");

setTimeout(function a() {
  console.log("Callback function");
}, 2000); // js engine will hold it for 2 sec in web API's environment

fetch( "https://anyURL.com" )
.then(function b() {
  console.log("URL fetched");
})

console.log("End");


for fetch() js engine will create microtask queue
