const pairSum = (numbers, targetSum) => {
  const obj = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    const complement = targetSum - num;
    if (complement in obj) {
      return [obj[complement], i];
    } else {
      obj[num] = i;
    }
  }
};


