const binarySearch = (numbers, target) => {
  // todo
  let left = 0;
  let right = numbers.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left+right) / 2);
    if (numbers[mid] === target) return mid;
    if (numbers[mid] > target) {
      right = mid-1;
    } else {
      left = mid+1;
    }
  }
  return -1;
};