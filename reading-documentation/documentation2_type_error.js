/* TypeError | Run the following code.

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

You'll see that it raises an error:

TypeError: tweet.length is not a function

Check the documentation of both TypeError and length, in order to find out what causes the error.
*/

let tweet = 'Woohoo! :-)';

  if (tweet.length > 140) {
    console.log('Tweet is too long!'); 
  } else {
    console.log('Tweet length is fine.');
  }
  

/* length is a string property and not a string method and should not have parenthesis. By using a parenthesis, the JS engine expects a function */
