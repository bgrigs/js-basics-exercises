// Transformation | Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

//Replace method
'Captain Ruby'.replace('Ruby', 'JavaScript');

// Substring method
'Captain Ruby'.substring(0, 8) + 'Javascript';

//Split method
'Captain Ruby'.split(' ')[0] + ' JavaScript';

//Declaring variables + using replace method
let ruby = 'Captain Ruby';
let javascript = ruby.replace('Ruby', 'Javascript'); 
console.log(javascript);

//Declaring a function + using replace method
function captain(string) {
  return string.replace('Ruby', 'Javascript')
}

console.log(captain('Captain Ruby')); 