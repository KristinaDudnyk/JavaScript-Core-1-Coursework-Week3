/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
// I would see here underfind because we not defind any value for variable "a"
let a;
console.log(a);

// Example 2
// The function doesn't return anything
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// Example 3
//
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();
// we didn't pass parametrs to the function while we invoking it

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);
// there is no element with index 3 in array
