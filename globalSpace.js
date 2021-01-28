var a = 100;
function a() {
  var x = 10;
}

console.log(window.a);
console.log(this.a);
console.log(a);  // it will assume that a is in global space if we dont putanything before a like window.a
console.log(x); // undefined