// Capitalize Words | Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let string = 'launch school tech & talk';
let words = string.split(' ');
let capArray = [];

for (let i = 0; i < words.length; i += 1) {
  let word = words[i];
  capArray.push(word[0].toUpperCase() + word.slice(1));
}

let capString = capArray.join(' ');

console.log(capString);
