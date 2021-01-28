// getName()
// console.log(x);

// console.log(getName);

var x = 7

function getName() {
  console.log("hello");
}


//This will not behave like function hence if we invoke this at top then it will throw error
var getName1 = () => {
  console.log("function 1");
} 

//This will not behave like function hence if we invoke this at top then it will throw error
var getName2 = function () {
  console.log("function 2");
}


getName();
getName1();
console.log(x);
console.log(getName);



// call Stack:


