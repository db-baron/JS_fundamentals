// EXAMPLE PROBLEM - Rewrite the code to mimic how the interpreter would rearrange it before running.
var hello = "interesting";
function example() {
  var hello = "hi!";
  console.log(hello);
}
example();
console.log(hello);

// ANSWER
  //declarations get hoisted...
var hello;
function example() {
  var hello;
  hello = "hi";
  console.log(hello);
}
  //while assignments and invocation maintain order
hello = "interesting";
example();
console.log(hello);


// Problem 1:
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable); // no data has been assigned to first_variable, so shows as console logs undefined.
var first_variable = "Yipee I was first!";
console.log(first_variable);


// Problem 2:
var food;
function eat() {
  var food = "gone";       // CAREFUL!
  food = "half-chicken";
  console.log(food);
  console.log(food);
}
food = "Chicken";
eat();
console.log(food);


// Problem 3:
var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word);
