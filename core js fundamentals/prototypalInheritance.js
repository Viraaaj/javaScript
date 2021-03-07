let arr = ["Viraj", "Hello"];
// arr.__proto__. //by doing this we can get access to methods and proerties

// arr.__proto__ is same as Array.prototype

// arr.__proto__ also has arr.__proto__.__proto__

// arr.__proto__ also has arr.__proto__.__proto__ also  arr.__proto__.__proto__.__proto__ but it is null

// basically:
// arr.__proto__ == Array.prototype
// arr.__proto__.__proto__ == Object.prototype
// arr.__proto__.__proto__.__proto__ == null



let object = {
    name: "Viraj",
    city: "Pune",
    getIntro: function() {
        console.log(this.name + " From " + this.city);
    }
}
// object.__proto__ == Object.prototype
// object.__proto__.__proto__ == null



function fun(){

}
// fun.__proto__ == Function.prototype
// fun.__proto__.__proto__ == Object.prototype
// fun.__proto__.__proto__.__proto__ == null


// whatever we do in js tthere is an object attached to it and that object
// has certain properties which we can access by using "." operator.



let object = {
    name: "Viraj",
    city: "Pune",
    getIntro: function() {
        console.log(this.name + " From " + this.city);
    }
}

let object2 = {
    name: "Hello",
}

// don't do this in your code it will cause performance issues:
object2.__proto__ = object; //it will log object

// so now if we do something like:
// object2.name == "Hello";
// object2.city == "Pune"
// this is because object's 2 proto is object here

// so initially it will try to find city in object2 but if it could not find city in object2
// then it will move to its proto  i.e. object and it could not find it there Also
// then it will move to object proto and if that doesnt exists then it will log undefined.

// object 2 is inheriting properties of object.

// but if we try to access function inside object then:
// object2.getIntro()
// this will log name declared in object2 and city in object
// like this: Hello From Pune.
// because name is present in object2 but city is not present hence it will get city fro its proto



Function.prototype.mybind = function() {
    console.log("Polyfill for bind: reference");
}

function fun() {
    // now if we do fun.__proto__.mybind() then we can access above function
    //also fun.mybind() will give same output
}

function fun2() {
    // now if we do fun2.__proto__.mybind() then we can access above function
    //also fun2.mybind() will give same output
}

// just because we give prototype to mybind function we can access it 
// in any function using anyFunction.mybind()