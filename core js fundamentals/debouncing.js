let counter = 0;
const getData = () => {
    //this function calls an api and gets data
    console.log("api fetched data: ", counter++);
}
//here what is happening is we are calling api when user is entering some text in input fied but what if we want to call api when user stops entering in input fied.(when he pause)


//solution for this is:
const debounceMethod = function (fn, delay) {
    let timer;
    return function () {
        let context = this,
        args = arguments

        clearTimeout(timer) //what if user entered text and we want to call api instantly rather than waiting for 2000ms, then we have to clear timeout.

        timer = setTimeout(() => {
            getData.apply(context, args);
        }, delay)
    }
}
// if delay gets 2000ms then api will be called

const betterFunction = debounceMethod(getData, 2000)
//it will call api when difference of time between two input text is 2000ms or greater than 2000ms


// what is debouncing?
// - debounce method takes a method and returns a better method
// - it takkes 2 arguments: function and delay and it does not make a function to uneccesarily call apis again and again, rather than it will only
// make api calls when there is diffrenece between two function calls which is greater than delay.
