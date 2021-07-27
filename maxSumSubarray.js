//find the maximum sun of a contingous subarray of 3

//method: sliding window

function maxSumSubarray(arr, k){
  let maxValue = -Infinity;
  let currentRunningSum = 0;
  for(let i = 0; i < arr.length; i++) {
    currentRunningSum += arr[i];
    if(i >= k - 1) {
      maxValue = Math.max(currentRunningSum, maxValue);
      currentRunningSum -= arr[i - (k - 1)];
    }
  }
return maxValue;
}

let array1 = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
console.log(maxSumSubarray(array1, 3))


