// Passcode | We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

//Your solution might also build the target string step by step, iterating over the passcode list like this:

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let joinedPasscode = '';

for (let i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    joinedPasscode += '-';
  }
  
  joinedPasscode += passcode[i];
}

console.log(joinedPasscode);

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'