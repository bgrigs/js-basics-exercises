//What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// false. The variable b on line 4 and on line 7 are two different variables. The variable declared on line 7 has block scope and isn't available outside of that block. 