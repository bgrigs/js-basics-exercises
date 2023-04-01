/* String Concatenation | Find out how we can join two or more strings together.

    The + operator is one way of joining two strings together. 
    
    Another option is to use the concat() method. It concatenates the string arguments to the calling string and returns a new string. 
    
    Take a close look at the Syntax section on concat()'s documentation page:

    str.concat(string2[, string3, ..., stringN])

    Note that str is the calling string, and the method parameters are placed within parentheses. The brackets indicate optional arguments. So, this line of the documentation indicates that we can provide any number of string arguments, but we must provide at least one.

    Here is an example:

    let firstName = 'Ada';
    let lastName = 'Lovelace';

    ''.concat(firstName, ' ', lastName);
    // 'Ada Lovelace'

    Under the "Syntax" heading, we also see the return value specified as "a new string containing the combined text of the strings provided." This portion of a method's documentation is extremely useful. It demonstrates the expected syntax and provides important information about the method parameters and return value.
    
    */

    const hello = "Hello, ";
    console.log(hello.concat("Kevin", ". Have a nice day."));
    // Hello, Kevin. Have a nice day.
    
    const greetList = ["Hello", " ", "Venkat", "!"];
    console.log("".concat(...greetList)); // "Hello Venkat!"

    "".concat({}); // "[object Object]"
    "".concat([]); // ""
    "".concat(null); // "null"
    "".concat(true); // "true"
    "".concat(4, 5); // "45"