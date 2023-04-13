//Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome', 'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro', 'Marrakesh', 'New York City'];

function contains(citySearch, cities) {
  return cities.indexOf(citySearch) >= 0;
}

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false 