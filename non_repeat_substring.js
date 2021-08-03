// Given a string, find the length of the longest substring, which has no repeating characters.

const non_repeat_substring = function(str) {
  let windowStart = 0,
  characterFreq = {},
  maxLength = 0;

  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if(!(str[windowEnd] in characterFreq)) {
      characterFreq[str[windowEnd]] = 0;
    }
    characterFreq[str[windowEnd]]++;
    while(characterFreq[str[windowEnd]] > 1) {
      characterFreq[str[windowStart]]--;
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(non_repeat_substring('aabccbb')); //3 -> "abc"
console.log(non_repeat_substring('abbbb')); //2 -> "ab"
console.log(non_repeat_substring('abccde')); //3 -> "abc" & "cde"