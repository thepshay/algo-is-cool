const sumPossible = (amount, numbers, memo={}) => {
  // todo
  if (amount in memo) return memo[amount]
  if (amount === 0) return true;
  if (amount < 0) return false;
  
  for (let num of numbers) {
    const diff = amount - num;
    memo[diff] = sumPossible(diff, numbers, memo);
    if (memo[diff]) return true;
  }
  return false;
};