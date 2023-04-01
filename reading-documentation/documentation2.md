Data Types | Without looking into your notes, try to remember which primitive data types are defined in JavaScript. Then find this information on MDN.

    String
    Number
    Undefined
    Boolean
    null
    Bigint (ES9)
    Symbol (ES6)

    Discussion

    You may see occasional references to null being an object, even on MDN. But, even there, you will also find statements that say it is primitive type. The history and behavior of null is somewhat confusing, but, for our purposes, it is a primitive type.

    In addition to the primitive data types, JavaScript has one non-primitive type: Object (which also comprises arrays). The main difference is that values of a primitive type are immutable. That is, there is no way to change values like 47, 'Launch School', or true, while you can change non-primitive values like arrays, e.g. by adding or removing elements.

Largest Number | Using the documentation, determine how we can find the largest numeric value that can be represented in JavaScript. Write a line of code that returns this value.

    Number.MAX_VALUE;

    MAX_VALUE is a property of Number. Any value larger than MAX_VALUE should be processed as Infinity.

    The value 1.79...e+308 uses exponential notation and can be read as 1.79... * 10^308 (1.79... times 10 to the power of 308), which is short-hand for a really large number.

    In ES6, another value was introduced: MAX_SAFE_INTEGER. It has a value of 9007199254740991 and is the largest number that can be processed and compared with precision.

    However, it is unlikely you will need those values soon.

Arithmetic Operator Precedence | Find the MDN documentation on operator precedence, and use it to find out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.

    3 ** 2 = 9
    4 * 5 = 20
    9 / 10 = .9
    20 + .9 = 20.9

    The MDN page on operator precedence in JavaScript includes a table that tells us that the order of the arithmetic operator used in the expression above is as follows:

    ** > (* and /) > +

    This means that when using parentheses for grouping, the expression is equivalent to (4 * 5) + ((3 ** 2) / 10), and therefore evaluates to 20.9.

    Discussion
    Although operator precedence makes an expression like 4 * 5 + 3 ** 2 / 10 unambiguous for the JavaScript engine, using parentheses usually makes an expression with multiple operators much easier for humans to read. For clarity, you should always use the parentheses when mixing operators, e.g.,

    (4 * 5) + ((3 ** 2) / 10)

    Don't assume that somebody working on your code knows the precise precedence rules.


Date | Find out what Date.now() returns.

    The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

Which year is this? | The MDN page for Date lists two methods to get the year of a date. What is the difference between the two methods and which one should you use?

    let today = new Date();

    today.getYear(); // 123. A number representing the year of the given date, according to local time, minus 1900. Has been deprecated. 

    today.getFullYear(); // 2023. The getFullYear() method returns the year of the specified date according to local time. This is the method that should be used

Argument Signatures | How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?

    The array method join() concatenates all elements of an array into a string. It expects a single, optional argument: a string that will be used as separator. If the argument is omitted, the separator defaults to ','. Any excess arguments passed to the method upon invocation are ignored.

    For example:
    let array = ['Bob', 'Kevin', 'Stuart']; 
    
    // separator argument omitted
    array.join();                  // 'Bob,Kevin,Stuart'

    // single separator argument
    array.join(', ');              // 'Bob, Kevin, Stuart'

    // excess argument passed in 
    array.join(' and ', 'also');   // 'Bob and Kevin and Stuart'








