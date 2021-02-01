function outerScope() {

  var a = 100;
  function innerScope() {
    console.log(a);
  }
  innerScope();
}
outerScope()(); // we are returning innerScope with outerScope

// instead of outerScope()() we can also write:
// var z = outerScope();
// z();



//next:
function outerScope(b) {

  var a = 100;
  function innerScope() {
    console.log(a, b);
  }
  innerScope();
}
var z = outerScope("Hello");
z();
// this will print (10, Hello) | cause innerScope will form closure with b also



// big closure:
function closure(){
  var c = 20;
  
  function outerScope(b) {
    let a = 100; // this a value will be taken into consideration.

    function innerScope() {
      console.log(a, b, c);
    }
    return innerScope;

  }
  return outerScope;
}

let a = 10000;
var close = (closure())("Hello");
close();



// Data hiding:

function counter() {

  var count = 0; //hide count here so that it cant be used outside scope.
  return function incrementCounter() {
    count++;
    console.log(count);
  }

}

var increment = counter();
increment()
increment()
// console.log(count); // this will give error

var increment2 = counter();
increment2() // we can use counter again it will create independent copy and new counter is created



//constructor

function Counter() {
  var count = 0;

  this.incrementCounter = function() {
    count++;
    console.log(count);
  }

  this.decrementCounter = function() {
    count--;
    console.log(count);
  }
}

var counter1 = new Counter();  // this is constructor hence it is mandatory to write new.
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()



// 33. realtion between closure and garbage collector

function a() {
  var x = 0, z = 10;  //z is smartly garbage collected but not x | cause x is used

  return function b() {
    console.log(x);
  }
}

var y = a();
// it will freez memory of x untill we call y()
y()