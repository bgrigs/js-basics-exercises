// Equality | Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// The output will be false. For arrays to be equal, they must occupy the same place in memory. 

// Primitives, like strings or numbers, are compared by their value. Arrays, however, are objects and not primitives. JavaScript compares whether two objects are strictly equal by checking whether they are the same object, i.e. whether they reference the same location in memory. 

// Note that if we alter our original code so that array2 references the same object as array1, our comparison logs true:

let array3 = [2, 6, 4];
let array4 = [2, 6, 4];
array4 = array3;

console.log(array3 === array4); // true