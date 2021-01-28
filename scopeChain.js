function a() {

  function b() {
    console.log(c);  
  }
  b(); // b function is lexiaclly in a function. (refer scopeChain.js)

}

var c = 10;
a();

// basically here in function b, it will search for variable c in its memory space, if is c not present then it will go its parent i.e. function a if c is not present there then it will go in global execution space and c is not prsernt there also then it will go to parent of global execution space which is null.

//lexical parent of b is a.
//lexical parent of a is global execution context.
//lexical parent of global execution context is null.