const fiveSort = (nums) => {
  // todo
  let i = 0;
  let j = nums.length - 1; 
  
  while (i < j) {
    // while (nums[j] === 5) {
    //   j--;
    // }
    // while (nums[i] !== 5 && i < nums.length - 1) {
    //   i++;
    // }
    // if (nums[i] === 5) {
    //   [nums[i], nums[j]] = [nums[j], nums[i]]; 
    //   i++;
    //   j--;
    // }
    
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    } else {
      i++;
    }
    
  }
  return nums;
};