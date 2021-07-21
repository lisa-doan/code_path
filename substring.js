// Write a function that takes in two strings and returns true if the second string is substring of the first, and false otherwise.

// Examples: 
// Input: laboratory, rat
// Output: true

// Input: cat, meow
// Output: false

// function substring(str1, str2) {
//   let windowSize = str2.length-1;
//   if(str2.length > str1.length) return false
//   for(let i = 0; i < str1.length; i++) {
//     if(i <= windowSize){
      
//     }
//   }
// }

function substring(str1, str2) {
 let result = str1.includes(str2);
 return result
}

console.log(substring("laboratory", "rat"))