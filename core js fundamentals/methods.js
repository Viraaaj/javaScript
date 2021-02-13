let name = {
    firstName: "Viraj",
    lastName: "Nimbalkar"
}

let fullName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " state " + state);
}

fullName.call(name, "Pune", "Maharashtra"); //first argument is always referen e to this variable and second one is parameter

let name2 = {
    firstName: "hello",
    lastName: "world",
}

//we can borrow functions from other object and use it with other object
fullName.call(name2, "earth", "something") //we are passing name2 as a argument

//in call method we pass arguments individually

//in apply method we pass second argument as array
fullName.apply(name2, ["earth", "something"])


//bind is same as call but it will give copy of method which can be invoked later
let printName = fullName.bind(name2, "bind", "method")
console.log(printName);
printName() //invoked here