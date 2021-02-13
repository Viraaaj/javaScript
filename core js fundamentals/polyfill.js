// polyfill is browser fallback.
// we can write our own implementation of bind method using polyfill.


// why we need to write own bind function? or 
// why polyfill for bind needed?
// if your browser dont have bind function and you have to write your own bind function then you can use polyfill for bind.

//original bind method
let name1 = {
    firstName: "Viraj",
    lastName: "Nimbalkar"
}

let printName1 = function() {
    console.log(this.firstName + " " + this.lastName);
}

let printMyName1 = printName1.bind(name1)
printMyName1();



// creating own bind method using prototype
let name = {
    firstName: "Viraj",
    lastName: "Nimbalkar"
}

let printName = function(hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + " hometown is " + hometown + " state is " + state + " country is " + country);
}

// let printMyName = printName.bind(name, "Hadapsar", "Pune") //we can also pass 2 parameters here now but then we have to pass 1 parameter at function invokation.
let printMyName = printName.bind(name, "Pune")
printMyName("Maharashtra", "India");


//accessing own bind function
// if we keep any method in Function.prototype then each and every method that we write has access to those methods.
Function.prototype.mybind = function(...args) { 
    let obj = this //printName can be accessed using "this" keyword and here we stored "this" keyword in variable "obj"
    params = args.slice(1) //here we stored second parameter as params and used .slice(1) to access that first parameter
    return function(...args2) { //this return function is printMyName2 and we are passing args2 so that we can access second parameter
        obj.apply(args[0], [...params, ...args2]); //here args will give reference of arguments
        // we passed both parameters as arguments in array so that we can access both
    }
}

let printMyName2 = printName.mybind(name, "Pune");
printMyName2("Maharashtra", "India");

