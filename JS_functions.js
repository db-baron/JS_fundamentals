
// Make a function that can be used anywhere in your file and that when invoked
// will console.log('I am running!'); Give it the name runningLogger.
function runningLogger() {
    console.log("I am running!");
}

// Make a function that is callable, has one parameter and multiplies the value of the parameter
// by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
function runningLogger(num) {
    return num*10;
}
// console.log(runningLogger(5));

// Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
function stringReturnOne() {
    return "Yeaaaahh!";
}

// Write a function named caller that has one parameter. If the argument provided to
// caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
function stringReturnTwo() {
    return "Okkaaaaay!"
}

function caller(x){
    if (typeof(x) == 'function');
        x();
}

// Write a function named myDoubleConsoleLog that has two parameters, if the arguments
// passed to the function are functions, console.log the value that each, when invoked, returns.
function myDoubleConsoleLog(y, z){
    if (typeof(y) == 'function' && typeof(z) == 'function'){
        console.log(y())    // #5th print to console
        console.log(z());   // #6th print to console
    }
}
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

// Write a function named caller2 that has one parameter. Have it console.log the string 'starting', then
// wait 2 seconds, and then invokes the argument if the argument is a function. // (setTimeout may be useful
// for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.
function caller2(param){
    console.log("starting");  // #1st print to console
    var x = setTimeout(function(){  // After the timer elapses this function gets thrown into the event loop.
        console.log("About to invoke the function")  // #4th print to console
        if (typeof(param)=='function') {
            param(stringReturnOne, stringReturnTwo);
        }
    }, 2000);
    console.log("ending"); // #2nd print to console
    return "Interesting";  // #3rd print to console
}

console.log(caller2(myDoubleConsoleLog));
