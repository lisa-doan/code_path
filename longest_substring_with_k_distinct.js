//Given a string, find the length of the longest substring in it with no more than K distinct characters.

//You can assume that K is less than or equal to the length of the given string.

function longest_substring_with_k_distinct(str, k) {
  let maxLength = 0;
  let charFrequency = {};
  let windowStart = 0;
  // in the following loop we'll try to extend the range [window_start, window_end]
  //iterate through the string and check if each character exist, if not, add key to charFrequency and assign to zero
  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if(!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    //if it does exist, increment by 1
    charFrequency[rightChar] += 1;
   // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
   while (Object.keys(charFrequency).length > k) {
     const leftChar = str[windowStart];
     charFrequency[leftChar] -= 1;
     if(charFrequency[leftChar] === 0) {
       delete charFrequency[leftChar];
     }
     //shrink window
     windowStart += 1;
   }
   // remember the maximum length so far
   maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};


console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`); //4
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`); //2
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`); //5