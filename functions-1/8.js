// Internationalization 1 | Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

//Using a switch statement. Note that if we use return statements in the clauses, we don't need to include additional break statements, because return will immediately exit from the function anyway.

function greet(langCode) {
  switch (langCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!'; 
  }
}

//Using if/else statements

/*function greet(langCode) {
  if (langCode === 'en') {
    return 'Hi!';
  } else if (langCode === 'fr') {
    return 'Salut!';
  } else if (langCode ==='pt') {
    return 'Olá!'
  } else if (langCode === 'de') {
    return 'Hallo!';
  }
}*/

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
