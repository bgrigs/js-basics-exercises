// Locale Part 2 | Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

//Using split 
function extractRegion(locale) {
  return locale.split('_')[1]
               .split('.')[0];
}

// Using split and slice 
/*function extractRegion(locale) {
  return locale.split('_')[1].slice(0, 2);
}*/

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'