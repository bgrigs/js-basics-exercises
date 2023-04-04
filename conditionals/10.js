// Are we moving? | Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); 

/* This will evaluate to true. The brakingForce is less than the acceleration. While the speed is not greater than 0, acceleration is. Becaause a condition on each side of the && operator is true, the output is true. */


//Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?

let moves = brakingForce < acceleration && speed > 0 || acceleration > 0;

console.log(moves); 

/* Yes, we need the parenthesis. && has a higher operator precedence than ||, thus:

brakingForce < acceleration && speed > 0 || acceleration > 0

is equivalent to:

(brakingForce < acceleration && speed > 0) || acceleration > 0
*/