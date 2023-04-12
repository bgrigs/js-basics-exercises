// Capitalize Words | Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let string = 'launch school tech & talk';
let words = string.split(' ');

for (let i = 0; i < words.length; i += 1) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let capString = words.join(' ')

console.log(capString);

