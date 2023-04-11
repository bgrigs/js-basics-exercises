//What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// { firstName: 'Jane', lastName: 'Doe' }. While constants cannot be re-assigned, objects that are assigned to const can be mutated. 

// One way to make an object immutable is by means of the Object.freeze() method. But it's important to note that this is a shallow freeze, meaning it only applies to the immediate properties of the object. If the value of those properties are objects themselves, they can still be mutated.

