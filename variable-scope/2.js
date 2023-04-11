//What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

let greeting = 'Hello world!';

// This will result in an error. Variables declared with let are not hoisted. An error will result if we declare it after the console.log(greeting) because greeting hasn't been initialized. 