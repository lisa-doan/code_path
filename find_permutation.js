/*
Permutation in a String (hard) #
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters, it will have n!n! permutations.
*/


const find_permutation = function(str, pattern) {
  //declare variables: windowStart, matched, charFreq (hashmap)
  let windowStart = 0, 
  matched = 0,
  charFreq = {};

  //iterate using a for loop to create charFreq hashmap for pattern
  for(let i = 0; i < pattern.length; i++) {
    if(!(pattern[i] in charFreq)) {
      charFreq[pattern[i]] = 0;
    }
    charFreq[pattern[i]]++;
  }
  //iterate through the window/str using a for loop
  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
     //check if each iteration or windowEnd is in the charFreq
     if(rightChar in charFreq) {
       //if true, decrement from the charFreq
       charFreq[rightChar]--;
       //if the value of the iteration === 0, increment matched by 1
       if(charFreq[rightChar] === 0) {
         matched++;
       }
     }

     //check if the charFreq length (size of the hashmap) === matched
      //return true
    if(matched === Object.keys(charFreq).length) {
      return true;
    }
        
    //shrink window size
    //check windowEnd is greater than pattern length
    if(windowEnd >= pattern.length - 1){
      //assign left char
      let leftChar = str[windowStart] 
    //increment windowStart
      windowStart++;
    //check if leftChar is in charFreq
      if(leftChar in charFreq) {
      //if true, check if value === 0, decrement from matched
        if(charFreq[leftChar] === 0) {
          matched--;
        } 
      //re-add/increment it to the charFreq
      charFreq[rightChar]++;
      }
    }
  }    
  return false;
};

console.log(find_permutation("odicf", "dc")) //false
console.log(find_permutation("oidbcaf", "abc")) //true
console.log(find_permutation("bcdxabcdy", "bcdyabcdx")) //true
console.log(find_permutation("aaacb", "abc")) //true
