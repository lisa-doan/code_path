// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

var reverseInteger = function(x) {
  let limit = 2**31,
  negativeTest = x < 0 ? -1 : 1,
  result = '';
  x = x.toString();
  for(let i = 0; i < x.length; i++) {
    result = x[i] + result;
  }
  result = parseInt(result);
  if(result < -limit || result > limit - 1 || result === 0) return 0;
  return result * negativeTest;
};


console.log(reverseInteger(123)) //321
console.log(reverseInteger(-123)) //-321
console.log(reverseInteger(120)) //21
console.log(reverseInteger(0)) //0
console.log(reverseInteger(1534236469)) //0