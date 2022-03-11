const pairProduct = (numbers, targetProduct) => {
  // todo
  const prev = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const divisor = targetProduct / num;
    if (divisor in prev) {
      return [prev[divisor], i];
    } else {
      prev[num] = i
    }
  }
};