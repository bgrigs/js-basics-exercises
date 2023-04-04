// Logical Conditions 3 || Without running the below code, determine what will be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// $3.99 will be logged the console. The logical not operator (!) returns false when its operand (sale) is truthy. Since the condition is false, the second value of the operand is assigned to admissionPrice. 