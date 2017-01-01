function sayHi() {
  console.log("Hi");
}

sayHi();

var sayBye = function() {
  console.log("Bye");
}

sayBye();

function callFunction(fun) {
  fun();
}

console.log("Calling functions:");
callFunction(sayHi);
callFunction(sayBye);
