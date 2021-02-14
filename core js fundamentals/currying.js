// currying: we make a copy of one method and create more methods out of it by presetting some arguments inside function.
// here we used multiply method again and again.

let multiply = function(a, b) {
    console.log(a * b);
}



// let multiply = function(b) {
//     let a = 2
//     console.log(a * b);
// }

//this bind method will act like above function where a is 2
let multiplyByTwo = multiply.bind(this, 2) //2 is value of a
multiplyByTwo(5) // 5 is value of b


let multiplyByThree = multiply.bind(this, 3) //3 is value of a
multiplyByThree(5) // 5 is value of b

let multiplyByFour = multiply.bind(this, 4, 6) //4 is value of a and 6 is value of b
multiplyByFour(5) // we now have values of a and b in above line hence this 5 will be ignored

let multiplyByNone = multiply.bind(this, ) //4 is value of a and 6 is value of b
multiplyByNone(5) // we now have values of a and b in above line hence this 5 will be ignored




// other method of currying is by using function closures.
let multiply2 = function(x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyClosure = multiply2(2)
multiplyClosure(5)

let multiplyClosure2 = multiply2(5)
multiplyClosure2(8)