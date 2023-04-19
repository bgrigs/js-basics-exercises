// Remove Last Char | Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}


removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

console.log(removeLastChar('ciao!'));
console.log(removeLastChar('hello'));
