// Switch | Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/* 

The following will be logged to the console: 
neigh
tweet tweet
*cricket*

The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value. 

If a break statement had been used after console.log('neigh'), only 'neigh' would have been logged to the console.

In order to avoid 'fall through' behavior, break statements should be used after each switch statement*/
