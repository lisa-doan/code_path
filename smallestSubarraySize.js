//Find the smallest subarray size with a given sum

//Method: Sliding Window

function smallestSubarraySize(arr, targetSum){
  let minWindowSize = Infinity;
  let currentWindowSum = 0;
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    currentWindowSum += arr[windowEnd];
    while(currentWindowSum >= targetSum) {
      minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);
      currentWindowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minWindowSize;
}

console.log(smallestSubarraySize([4, 2, 2, 7, 8, 1, 2, 8, 1, 0], 8));