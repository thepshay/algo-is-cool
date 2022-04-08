const mergeSort = (nums) => {
  // todo
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  const rightSorted = mergeSort(right);
  const leftSorted = mergeSort(left);
  return merge(rightSorted, leftSorted);
};

const merge = (right, left) => {
  right.reverse();
  left.reverse();
  const sorted = [];
  while (right.length > 0 && left.length > 0) {
    if (left[left.length - 1] < right[right.length - 1]) {
      sorted.push(left.pop());
    } else {
      sorted.push(right.pop());
    }
  }
  
  return [...sorted, ...left.reverse(), ...right.reverse()];
}