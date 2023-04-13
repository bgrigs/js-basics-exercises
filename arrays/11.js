// Checking items off the grocery list | We have made a grocery list, and as we check off items on that list, we would like to remove them.

//Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let inCart = groceryList.shift();  
  console.log(inCart);
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []
console.log(groceryList);

if (groceryList.length === 0) {
  console.log('All items in cart.');
}

