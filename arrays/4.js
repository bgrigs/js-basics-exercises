// Alphabet | Split the string alphabet into an array of characters.

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let newArr = alphabet.split('');

console.log(alphabet);
console.log(newArr);


//Using a for loop

/*let charArr = [];

for (let i = 0; i < alphabet.length; i += 1) {
  characters = alphabet[i];
  charArr.push(characters);
}

console.log(charArr);*/

// Using Array.from

let arr = Array.from(alphabet);

console.log(arr);