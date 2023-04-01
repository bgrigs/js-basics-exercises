1. Finding Documentation | What is an excellent destination when looking for JavaScript documentation?

    MDN is a great resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript

    However, ECMA International is the official documentation: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/

2. Lowercase | Find out whether JavaScript has a method to lowercase a string, for example converting 'Aloha, World!' into 'aloha, world!'.

    The toLowerCase() method returns the calling string value converted to lower case.

    Discussion: You might notice that there is an additional method String.prototype.toLocaleLowerCase(), which is relevant for alphabets in which the case mapping is not as straightforward as in English. But as long as we don't work with a language where this is the case, toLowerCase() is the straightforward choice.

3. Mountain Caps | Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

    There is no built-in method for capitalizing the first letter of string. If we wanted to have such a method, we would have to implement it ourselves.

    The toUpperCase() method causes the entire string to be written in uppercase letters. 

4. Array Element Access | Locate the documentation for the Array built-in object on MDN. How can we access the element 'and' in the array ['fish', 'and', 'chips']?

    ['fish', 'and', 'chips'][1]
    OR
    let dinner = ['fish', 'and', 'chips'];
    dinner[1];

    Discussion: We can use bracket notation to access the array element at a particular index. In JavaScript, arrays have a zero-based index. This means that the first element in the array will have an index of 0, the second element will have an index of 1, and so on.

5. Out of Bounds | What happens if we take the array ['fish', 'and', 'chips'] and try to access the element at index position 10? Try this in your JavaScript console.

    Trying to access an element at an index that is out of the bounds will return undefined.
    ['fish', 'and', 'chips'][10]; // => undefined

6. Property vs. Method | What are the return values of the last 3 statements? Refer to the MDN documentation about the Array object for help.

    let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

    trees[trees.length - 1]; // 'palm tree'. The length of the array is 4, so by including - 1 we are requesting the element at the third index. 
    trees.pop(); // 'palm tree'. Returns the element at the last index.
    trees[trees.length - 1]; // 'sequoia'. The previous statement mutated the array and removed 'palm tree'. The length of the array changed to 3 and by including - 1 we are requesting the element at the second index. 

    Note that we use trees.length (without parentheses) and trees.pop() (with parentheses). If you try using trees.length() and trees.pop, you will notice that this does not work. For now, simply remember that length is an array property and is called without parentheses; pop is an array method that must be invoked with parentheses (because it is a function). You will learn more about this later.

    Also notice that the index of the last element in an array will always be the length of that array minus 1. For example, the last index in a four-element array is 3. This is due to arrays having a zero-based index.

7. Type of Primitive | Look up the MDN documentation for the typeof operator. What is its return value? Determine what the following statements will return:

    typeof 23.5; // "number"

    typeof 'Call me Ishmael.'; "string"

    typeof false; "boolean"

    typeof 0; "number"

    typeof null; "object"

    typeof undefined; "undefined"
    
     The typeof operator returns a string indicating the type of the operand's value.

    Discussion: Take care to read the documentation carefully: typeof returns what you would expect for most primitive types, but note that typeof null returns the string 'object'. This is a historic bug and it's too late to change it without breaking existing code. There's no need to understand the details behind it, it's only important to be aware of the fact that JavaScript will claim null to be an 'object'.
   
8. Return Values | Consider the following code snippet:

    let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

    let words = tweet.split(' ');
    let isValid = tweet.length < 140;

    What will the following statements return?

    typeof tweet; // "string"
    typeof words;  // "object"
    typeof isValid; "boolean"

    Discussion: Note in particular that although words is an array, typeof words returns 'object'. This is because, in JavaScript, arrays are a kind of object. If you need to specifically distinguish whether an object is an array, you can use the Array.isArray() method, which returns a Boolean:

    Array.isArray(words);  // true

9. Method Chaining | Given the following tweet:

    let tweet = 'Starting to get the hang of it... #javascript #launchschool';

    Given the following tweet:

    tweet.split(' ');
    tweet.split(' ').reverse();
    tweet.split(' ').reverse().join(' ');

    Reference the documentation to learn about the return value of each method.

    tweet.split(' '); // The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array. This statement will return:

    [
      'Starting',
      'to',
      'get',
      'the',
      'hang',
      'of',
      'it...',
      '#javascript',
      '#launchschool'
    ]

    tweet.split(' ').reverse(); // this statement will first initiate the split method (see above). It will then use the reverse method and reverse the elements in the array. This statement will return: 

    [
      '#launchschool',
      '#javascript',
      'it...',
      'of',
      'hang',
      'the',
      'get',
      'to',
      'Starting'
    ]

    tweet.split(' ').reverse().join(' '); // The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. This statement will return: 

      '#launchschool #javascript it... of hang the get to Starting'

10. Equality | In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.

    '8' == 8; // true. == is the standard or abstract equality operator and will attempt to coerce the two operands into two values of the same kind before making a comparison.  When dealing with a string and a number, == coerces the string value into a number.

    '8' === 8; // false. === is the strict equality operator. No type conversion is performed. It will always return false if its operands are of different types. It's recommended to always use the strict equality operator to unavoid unexpected behavior. 





