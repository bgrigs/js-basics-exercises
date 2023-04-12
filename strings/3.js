// Repeat | Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

function repeat(number, text) {
  let repeatString = '';

  while (number > 0) {
    repeatString += text; 
    number -= 1; 
  }

  return repeatString;
}

repeat(3, 'ha'); // 'hahaha'
console.log(repeat(5, 'ja'));