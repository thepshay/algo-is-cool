var findDisappearedNumbers = function(nums) {
  for(let i=0; i<nums.length;i++){    
      const curr = Math.abs(nums[i])
      if(nums[curr-1] > 0) nums[curr-1] *= -1
  }  
  
  
  const res = [];
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          res.push(i+1)
      }
  }
  return res;
};