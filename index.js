function receivesAFunction(callbackFunction) {
callbackFunction();
}

function returnsANamedFunction() {
    return function sayHi () {
        console.log("Hello!")
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("shhh! I'm anonymous!")
    }
}