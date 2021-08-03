// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

const length_of_longest_substring = function(str, k) {
  // TODO: Write your code here
  let windowStart = 0,
  maxLength = 0,
  charFrequency = {},
  maxCharFrequencyCount = 0;

  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if(!(str[windowEnd] in charFrequency)) {
      charFrequency[str[windowEnd]] = 0;
    }
    charFrequency[str[windowEnd]]++;
    maxCharFrequencyCount = Math.max(maxCharFrequencyCount, charFrequency[str[windowEnd]]);
    if(windowEnd - windowStart + 1 - maxCharFrequencyCount > k) {
      charFrequency[windowStart]--;
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);

  }
  return maxLength;
};

console.log(length_of_longest_substring("aabccbb", 2)); //5 -> "bbbbb"
console.log(length_of_longest_substring("abbcb", 1)); //4 -> "bbbb"
console.log(length_of_longest_substring("abccde", 1)); //3 -> "ccc"
